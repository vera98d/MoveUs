export interface User {
  id: string;
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
}

export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  owner: string;
  img: string;
}

export interface Activity {
  id: string;
  exercise: string;
  duration: string;
  score: number;
  date: Date;
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
