import { getFirestore, collection, getDocs, query, where, documentId } from "firebase/firestore";
import { Group, User } from "../interfaces/dbData";

class GroupRankingService {
  getGroupsUserBelongsTo = async (currentUserInfo: User) => {
    const q = query(collection(getFirestore(), "groups"), where("members", "array-contains", currentUserInfo.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      members: doc.data().members,
      owner: doc.data().owner,
      imageUrl: doc.data().imageUrl,
    })) as Group[];
  };

  getUsersOwnedGroups = async (currentUserInfo: User) => {
    const q = query(collection(getFirestore(), "groups"), where("owner", "==", currentUserInfo.uid));
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      members: doc.data().members,
      owner: doc.data().owner,
      imageUrl: doc.data().imageUrl,
    })) as Group[];
  };

  getGroupMembersInfo = async (groupId: string) => {
    const group = await this.getGroupInfoById(groupId);

    if (group && group.members.length > 0) {
      const userRef = collection(getFirestore(), "users");
      const queryByGroupMembers = query(userRef, where("uid", "in", group.members));
      const membersQuerySnapshot = await getDocs(queryByGroupMembers);

      return membersQuerySnapshot.docs.map((doc) => ({
        uid: doc.data().uid,
        name: doc.data().name,
        surname: doc.data().surname,
        login: doc.data().login,
        password: doc.data().password,
        email: doc.data().email,
        score: doc.data().score,
        lastActivity: doc.data().lastActivity,
        groups: doc.data().groups,
        ownedGroups: doc.data().ownedGroups,
        activities: doc.data().activities,
      })) as User[];
    }

    return [];
  };

  getGroupInfoById = async (groupId: string) => {
    const q = query(collection(getFirestore(), "groups"), where(documentId(), "==", groupId));
    const querySnapshot = await getDocs(q);
    const groupDoc = querySnapshot.docs.find((doc) => doc.id === groupId);

    if (groupDoc) {
      return groupDoc.data() as Group;
    }
  };
}

export default new GroupRankingService();
