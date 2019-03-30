import React from "react";
import { Image } from "react-native";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import * as theme from "../theme";

import Matches from "./Matches";
import Overview from "./Overview";
import Top from "./Top";
import Login from "./Login";
import UnderConstruction from "./UnderConstruction";

const MatchesScreenStack = createStackNavigator(
  {
    Matches: { screen: Matches },
    Overview: { screen: Overview }
  },
  {
    initialRoute: "Matches",
    cardStyle: {
      shadowColor: "transparent",
      backgroundColor: "transparent"
    },
    headerMode: "none"
  }
);

const TabContainer = createBottomTabNavigator(
  {
    Matches: {
      screen: MatchesScreenStack,
      navigationOptions: {
        tabBarIcon: tab => (
          <Image
            style={{ height: 22, width: 22 }}
            source={
              tab.focused
                ? require("../assets/matches-active.png")
                : require("../assets/matches.png")
            }
          />
        )
      }
    },
    "Top Players": {
      screen: Top,
      navigationOptions: {
        tabBarIcon: tab => (
          <Image
            style={{ height: 21, width: 17 }}
            source={
              tab.focused
                ? require("../assets/profile-active.png")
                : require("../assets/profile.png")
            }
          />
        )
      }
    },
    Favorites: {
      screen: UnderConstruction,
      navigationOptions: {
        tabBarIcon: tab => (
          <Image
            style={{ height: 22, width: 13 }}
            source={
              tab.focused
                ? require("../assets/bookmark-active.png")
                : require("../assets/bookmark.png")
            }
          />
        )
      }
    },
    Settings: {
      screen: UnderConstruction,
      navigationOptions: {
        tabBarIcon: tab => (
          <Image
            style={{ height: 21, width: 21 }}
            source={
              tab.focused
                ? require("../assets/gear-active.png")
                : require("../assets/gear.png")
            }
          />
        )
      }
    }
  },
  {
    initialRouteName: "Matches",

    tabBarOptions: {
      activeTintColor: theme.colors.primary,
      style: {
        borderTopWidth: 0
      }
    }
  }
);

const AppContainer = createSwitchNavigator(
  {
    Login,
    App: TabContainer
  },
  { initialRouteName: "Login" }
);

export default createAppContainer(AppContainer);
