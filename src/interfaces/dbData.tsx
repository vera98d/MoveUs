export interface User {
  uid: string;
  name: string;
  surname: string;
  login: string;
  password: string;
  email: string;
  score: number;
  lastActivity: Date;
  groups: string[];
  ownedGroups: string[];
  activities: string[];
  avatarUrl?: string;
}

export interface Group {
  uid: string;
  name: string;
  imageUrl: string;
  description: string;
  members: string[];
  owner: string;
}

export interface Activity {
  uid: string;
  exercise: string;
  date: Date;
  duration: string;
  score: number;
}

export interface Exercise {
  id: string;
  name: string;
  weight: number;
}

export interface Invitation {
  id: string;
  group: string;
  user: string;
}
