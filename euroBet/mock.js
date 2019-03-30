import React from "react";
import { Image } from "react-native";

export const dates = [
  {
    date: "29.03.2019",
    DOW: "TODAY",
    epoch: "Round of 16",
    games: [
      {
        live: false,
        country: "Switzerland",
        flag: require("./assets/switzerland.png"),
        flagx3: require("./assets/switzerlandx3.png"),
        adversary: "Poland",
        advFlag: require("./assets/poland.png"),
        advFlagx3: require("./assets/polandx3.png"),
        result: "0 - 1"
      },
      {
        live: false,
        country: "Wales",
        flag: require("./assets/wales.png"),
        flagx3: require("./assets/walesx3.png"),
        adversary: "N. Ireland",
        advFlag: require("./assets/england.png"),
        advFlagx3: require("./assets/englandx3.png"),
        result: "2 - 0"
      },
      {
        live: true,
        country: "Croatia",
        flag: require("./assets/croatia.png"),
        flagx3: require("./assets/croatiax3.png"),
        adversary: "Portugal",
        advFlag: require("./assets/portugal.png"),
        advFlagx3: require("./assets/portugalx3.png"),
        result: "3 - 3"
      }
    ]
  },
  {
    date: "30.03.2019",
    DOW: "FRIDAY",
    epoch: "Round of 16",
    games: [
      {
        live: false,
        country: "France",
        flag: require("./assets/france.png"),
        adversary: "Ireland",
        advFlag: require("./assets/ireland.png"),
        result: "15:00"
      },
      {
        live: false,
        country: "Germany",
        flag: require("./assets/germany.png"),
        adversary: "Slovakia",
        advFlag: require("./assets/slovakia.png"),
        result: "18:00"
      },
      {
        live: false,
        country: "Hungary",
        flag: require("./assets/hungary.png"),
        adversary: "Belgium",
        advFlag: require("./assets/belgium.png"),
        result: "21:00"
      }
    ]
  },
  {
    date: "31.03.2019",
    DOW: "SATURDAY",
    epoch: "Round of 16",
    games: [
      {
        live: false,
        country: "Italy",
        flag: require("./assets/italy.png"),
        adversary: "Spain",
        advFlag: require("./assets/spain.png"),
        result: "15:00"
      },
      {
        live: false,
        country: "England",
        flag: require("./assets/england-real.png"),
        adversary: "Iceland",
        advFlag: require("./assets/iceland.png"),
        result: "18:00"
      }
    ]
  }
];

export const liveStream = {
  time: "65'",
  moments: [
    [
      {
        time: "65'",
        player: "Ivan Perisic",
        type: "yellow",
        from: "country"
      },
      {
        time: "63'",
        player: "Mateo Kovacic",
        type: "substitution",
        out: "Marko Rog"
      },
      {
        time: "63'",
        player: "Cristiano Ronaldo",
        type: "goal",
        from: "adversary"
      },
      {
        time: "50'",
        player: "Marko Pjaca",
        type: "yellow",
        from: "country"
      },
      {
        time: "46'",
        player: "Cristiano Ronaldo",
        type: "goal",
        from: "adversary"
      }
    ],
    [
      {
        time: "44'",
        player: "Luka Modric",
        type: "goal",
        from: "country"
      },
      {
        time: "38'",
        player: "Pepe",
        type: "yellow",
        from: "country"
      }
    ]
  ]
};

export const highlights = liveStream.moments.map(item =>
  item.map(i => {
    if (i.type === "goal" || i.type === "yellow" || i.type === "red") return i;
  })
);

export const stats = [
  {
    title: "Shots on target",
    icon: (
      <Image
        style={{ height: 33 / 2, width: 50 / 2 }}
        source={require("./assets/shots-target.png")}
      />
    ),
    country: 6,
    adversary: 1,
    total: 7
  },
  {
    title: "Shots off target",
    icon: (
      <Image
        style={{ height: 44 / 2, width: 50 / 2 }}
        source={require("./assets/shots-off.png")}
      />
    ),
    country: 2,
    adversary: 2,
    total: 4
  },
  {
    title: "Ball possesion",
    icon: (
      <Image
        style={{ height: 42 / 2, width: 42 / 2 }}
        source={require("./assets/matches.png")}
      />
    ),
    country: 65,
    adversary: 35,
    total: 100
  },
  {
    title: "Corners",
    icon: (
      <Image
        style={{ height: 41 / 2, width: 44 / 2 }}
        source={require("./assets/flag.png")}
      />
    ),
    country: 5,
    adversary: 1,
    total: 6
  },
  {
    title: "Fouls",
    icon: (
      <Image
        style={{ height: 42 / 2, width: 46 / 2 }}
        source={require("./assets/fouls.png")}
      />
    ),
    country: 3,
    adversary: 4,
    total: 7
  },
  {
    title: "Yellow Cards",
    icon: (
      <Image
        style={{ height: 45 / 2, width: 38 / 2 }}
        source={require("./assets/cards.png")}
      />
    ),
    country: 1,
    adversary: 2,
    total: 3
  }
];

export const top = [
  { name: "Cristiano Ronaldo", goals: 7 },
  { name: "Álvaro Morata", goals: 6 },
  { name: "Rober Lewandowski", goals: 5 },
  { name: "Dimitri Payet", goals: 5 },
  { name: "Romelu Lukaku", goals: 4 },
  { name: "Nani", goals: 3 },
  { name: "Ivan Perisic", goals: 3 },
  { name: "Luka Mordic", goals: 2 },
  { name: "Nice! You", goals: 2 },
  { name: "saw this! ;)", goals: 1 }
];
