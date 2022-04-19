import { Group, User } from "../../interfaces/dbData";

export const groups: Group[] = [
  {
    id: "1",
    name: "Crazy runners",
    description: "Run to the moon and back.",
    members: ["1", "2", "3", "4", "5"],
    owner: "1",
    img: "https://pro-run.pl/wp-content/uploads/2019/01/spotkanie-w-biegu.jpg",
  },
  {
    id: "2",
    name: "Joggers",
    description: "We love jogging",
    members: ["1", "2", "4"],
    owner: "2",
    img: "https://runforhelp.pl/assets/images/slider/runing-man-1.png",
  },
  {
    id: "3",
    name: "Tigers",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta, labore.",
    members: ["3"],
    owner: "3",
    img: "https://media1.popsugar-assets.com/files/thumbor/aBnM-t_qdgirAzJQRkSARtGwVNI/fit-in/728xorig/filters:format_auto-!!-:strip_icc-!!-/2022/02/08/178/n/1922729/464b6509620332268021c5.99795505_/i/-Home-Workout-Women-Bodyweight.jpg",
  },
  {
    id: "4",
    name: "Jumpers",
    description: "We jump up to the sky",
    members: ["1", "3", "4", "5"],
    owner: "4",
    img: "https://media.istockphoto.com/photos/full-body-photo-of-funky-pretty-lady-jumping-high-up-celebrating-picture-id1210306509?k=20&m=1210306509&s=612x612&w=0&h=oniEqDgyDOFb2ZHnvZeowAlUya79MJO78Gexdx6NaXw=",
  },
  {
    id: "5",
    name: "Pilates masters",
    description: "We love excersising",
    members: ["1", "4"],
    owner: "1",
    img: "https://cdn.galleries.smcloud.net/t/galleries/gf-9TJ7-VLLq-mjZD_pilates-a-odchudzanie-1920x1080-nocrop.jpg",
  },
];

export const users: User[] = [
  {
    id: "1",
    name: "John",
    surname: "Mayer",
    login: "JohnMayer",
    password: "passwd17654",
    email: "johnmayer@gmail.com",
    score: 1340,
    lastActivity: new Date(2022, 4, 4),
    groups: ["1", "2", "4", "5"],
    ownedGroups: ["1", "5"],
    activities: ["1", "2"],
  },
  {
    id: "2",
    name: "Alicja",
    surname: "Keys",
    login: "AlicjaKeys",
    password: "fwswd17654",
    email: "AlicjaKeys@gmail.com",
    score: 640,
    lastActivity: new Date(2022, 2, 3),
    groups: ["1", "2"],
    ownedGroups: ["2"],
    activities: ["1", "2"],
  },
  {
    id: "3",
    name: "Billie",
    surname: "Eilish",
    login: "BillieEilish",
    password: "fwlhdik17654",
    email: "BillieEilish@gmail.com",
    score: 100,
    lastActivity: new Date(2022, 2, 10),
    groups: ["1", "3", "4"],
    ownedGroups: ["3"],
    activities: ["3", "2", "4"],
  },
  {
    id: "4",
    name: "Harry",
    surname: "Styles",
    login: "Harry864",
    password: "fllpjncdik176421",
    email: "BillieEilish@gmail.com",
    score: 940,
    lastActivity: new Date(2022, 4, 8),
    groups: ["1", "2", "4", "5"],
    ownedGroups: ["4"],
    activities: ["3", "2", "4"],
  },
  {
    id: "5",
    name: "Paul",
    surname: "Hewson",
    login: "Bono123",
    password: "lrootok176421",
    email: "Bono123@gmail.com",
    score: 1540,
    lastActivity: new Date(2022, 4, 15),
    groups: ["1", "4"],
    ownedGroups: [],
    activities: ["3", "2", "4"],
  }];

export const user: User = users[0];
