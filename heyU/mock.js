export const messages = [
  {
    icon: require("./assets/user1x3.png"),
    name: "Oswald Cobblepot",
    lastMessage: "I'm the King of Gotham",
    time: "7:03 PM"
  },
  {
    icon: require("./assets/user2x3.png"),
    name: "Fish Mooney",
    lastMessage: 'Please don\'t call me "babes".',
    time: "5:35 PM"
  },
  {
    icon: require("./assets/user3x3.png"),
    name: "Bruce Wayne",
    lastMessage: "Sometimes the right way is also the ugly way..",
    time: "8:50 AM"
  },
  {
    icon: require("./assets/user4x3.png"),
    name: "Barbara Kean",
    lastMessage: "It's Gotham, baby, we've all got flair!",
    time: "Yesterday",
    notification: true
  },
  {
    icon: require("./assets/user5x3.png"),
    name: "Edward Nygma",
    lastMessage: "No body, no crime.",
    time: "Yesterday"
  },
  {
    icon: require("./assets/user6x3.png"),
    name: "Selina Kyle",
    lastMessage: "Cat got your tongue?",
    time: "Sunday"
  },
  {
    icon: require("./assets/user7x3.png"),
    name: "Harvey Bullock",
    lastMessage: "I thought I was supposed to be the bad guy here?",
    time: "Saturday",
    notification: true
  },
  {
    icon: require("./assets/user8x3.png"),
    name: "Jim Gordon",
    lastMessage: "Nice, you saw this :D",
    time: "Saturday",
    notification: true
  }
];

export const chat = [
  { message: "Mr. Cobblepot. Nice to\nmeet you!" },
  { message: "Call me Penguin.", hour: "7:00PM", from: true },
  { message: "I thought I heard you\nhated that name." },
  { message: "It grew on me  ", hour: "7:03PM", from: true },
  { message: "Penguin, it is" },
  { message: "...", from: true }
];

export const groups = [
  {
    name: "Gotham City Police Department",
    last: "5 minutes ago",
    icons: [
      require("./assets/user7.png"),
      require("./assets/user4.png"),
      require("./assets/user6.png"),
      require("./assets/user8.png")
    ]
  },
  {
    name: "Gotham City Police Department",
    last: "2 days ago",
    icons: [
      require("./assets/user1.png"),
      require("./assets/user4.png"),
      require("./assets/user6.png"),
      require("./assets/user8.png"),
      require("./assets/user7.png")
    ]
  },
  {
    name: "Falcone Crime Family",
    last: "Saturday",
    icons: [
      require("./assets/user5.png"),
      require("./assets/user1.png"),
      require("./assets/user4.png"),
      require("./assets/user6.png"),
      require("./assets/user8.png"),
      require("./assets/user7.png"),
      require("./assets/user2.png")
    ]
  },
  {
    name: "Arkham Asylum",
    last: "Saturday",
    icons: [require("./assets/user7.png"), require("./assets/user8.png")]
  }
];

export const contacts = [
  {
    icon: require("./assets/user1x2.png"),
    name: "Oswald Cobblepot",
    online: true
  },
  { icon: require("./assets/user6x2.png"), name: "Selina Kyle" },
  { icon: require("./assets/user2x2.png"), name: "Fish Mooney", online: true },
  { icon: require("./assets/user3x2.png"), name: "Bruce Wayne", online: true },
  { icon: require("./assets/user7x2.png"), name: "Harvey Bullock" },
  { icon: require("./assets/user4x2.png"), name: "Barbara Kean", online: true },
  { icon: require("./assets/user8x2.png"), name: "Jim Gordon" },
  { icon: require("./assets/user1x2.png"), name: "Filler" },
  { icon: require("./assets/user5x2.png"), name: "Edward Nygma", online: true }
];

export const profile = {
  icon: require("./assets/profile.png"),
  name: "John Doe",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
  email: "johndoe@symu.co",
  telephone: "00 222 333 444",
  notifications: true
};
