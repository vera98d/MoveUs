import { getFirestore, collection, getDocs, query, where, documentId } from "firebase/firestore";
import { User } from "../interfaces/dbData";

class GroupRankingService {
  getGroupsUserBelongsTo = async (currentUserInfo: User) => {
    const groupRef = collection(getFirestore(), "groups");
    const groupNumbersUsersBelongsTo = currentUserInfo.groups.filter((group: string) => {
      return !currentUserInfo.ownedGroups.includes(group);
    });
    const queryUsersGroups = query(
      groupRef,
      where(documentId(), "in", groupNumbersUsersBelongsTo),
    );
    const usersGroupsSnapshot = await getDocs(queryUsersGroups);

    return usersGroupsSnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      members: doc.data().members,
      owner: doc.data().owner,
      imageUrl: doc.data().imageUrl,
    }));
  };

  getUsersOwnedGroups = async (currentUserInfo: User) => {
    const groupRef = collection(getFirestore(), "groups");
    const queryUsersGroups = query(
      groupRef,
      where(documentId(), "in", currentUserInfo.ownedGroups),
    );
    const usersGroupsSnapshot = await getDocs(queryUsersGroups);

    return usersGroupsSnapshot.docs.map((doc) => ({
      uid: doc.id,
      name: doc.data().name,
      description: doc.data().description,
      members: doc.data().members,
      owner: doc.data().owner,
      imageUrl: doc.data().img,
    }));
  };

  getGroupMembersInfo = async (groupId: string) => {
    const groupRef = collection(getFirestore(), "groups");
    const queryByGroupId = query(
      groupRef,
      where(documentId(), "==", groupId),
    );
    const ByGroupIdSnapshot = await getDocs(queryByGroupId);
    const groupInfo = ByGroupIdSnapshot.docs[0].data();

    const userRef = collection(getFirestore(), "users");
    const queryByGroupMembers = query(userRef, where("uid", "in", groupInfo.members));
    const querySnapshot = await getDocs(queryByGroupMembers);
    console.log("members:", groupInfo.docs);

    querySnapshot.docs.forEach((doc) => {
      console.log("doc:", doc.data());
    });
    return querySnapshot.docs.map((doc) => ({
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
    }));
  };
}

export default new GroupRankingService();
