import React from "react";
import {
  createBottomTabNavigator,
  createSwitchNavigator,
  createAppContainer,
  createStackNavigator
} from "react-navigation";

import {
  MaterialCommunityIcons,
  MaterialIcons,
  Entypo
} from "@expo/vector-icons/";

import { TouchableOpacity, MaskedViewIOS, Platform } from "react-native";
import { Block, Text } from "../components";

import Messages from "./Messages";
import Chat from "./Chat";
import Groups from "./Groups";
import Contacts from "./Contacts";
import Profile from "./Profile";
import { LinearGradient } from "expo";
import Login from "./Login";
import UnderConstruction from "./UnderConstruction";

const firstGradientColor = "#d90646";
const secondGradientColor = "#eb402c";

const IconGradient = props => {
  if (props.iconSet === 1) {
    if (props.color !== firstGradientColor || Platform.OS !== "ios")
      return <MaterialCommunityIcons {...props} />;

    return (
      <MaskedViewIOS maskElement={<MaterialCommunityIcons {...props} />}>
        <LinearGradient
          colors={[firstGradientColor, secondGradientColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <MaterialCommunityIcons
            {...props}
            style={[props.style, { opacity: 0 }]}
          />
        </LinearGradient>
      </MaskedViewIOS>
    );
  } else if (props.iconSet === 2) {
    if (props.color !== firstGradientColor || Platform.OS !== "ios")
      return <MaterialIcons {...props} />;

    return (
      <MaskedViewIOS maskElement={<MaterialIcons {...props} />}>
        <LinearGradient
          colors={[firstGradientColor, secondGradientColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <MaterialIcons {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedViewIOS>
    );
  } else if (props.iconSet === 3) {
    if (props.color !== firstGradientColor || Platform.OS !== "ios")
      return <Entypo {...props} />;

    return (
      <MaskedViewIOS maskElement={<Entypo {...props} />}>
        <LinearGradient
          colors={[firstGradientColor, secondGradientColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Entypo {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedViewIOS>
    );
  }
};

const FloatingButton = props => {
  return (
    <Block>
      <TouchableOpacity
        style={{
          position: "absolute",
          top: -33
        }}
        onPress={props.navigation.onPress}
        activeOpacity={1}
      >
        <LinearGradient
          colors={[firstGradientColor, secondGradientColor]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          style={{
            alignItems: "center",
            justifyContent: "center",
            height: 70,
            width: 70,
            borderRadius: 35,
            marginBottom: 20
          }}
        >
          <Text white title>
            +
          </Text>
        </LinearGradient>
      </TouchableOpacity>
    </Block>
  );
};

const ScreenStack = createStackNavigator(
  {
    Messages: {
      screen: Messages
    },
    Chat: { screen: Chat }
  },
  {
    initialRoute: "Messages"
  }
);

ScreenStack.navigationOptions = ({ navigation }) => {
  let tabBarVisible = true;
  if (
    ["Chat"].includes(navigation.state.routes[navigation.state.index].routeName)
  ) {
    tabBarVisible = false;
  }
  return {
    tabBarVisible
  };
};

const TabContainer = createBottomTabNavigator(
  {
    Stack1: {
      screen: ScreenStack,
      navigationOptions: {
        tabBarIcon: tab => (
          <IconGradient
            size={22}
            color={tab.tintColor}
            name={"message-text"}
            iconSet={1}
          />
        )
      }
    },
    Groups: {
      screen: Groups,
      navigationOptions: {
        tabBarIcon: tab => (
          <IconGradient
            size={22}
            color={tab.tintColor}
            name={"people-outline"}
            iconSet={2}
          />
        )
      }
    },
    New: {
      screen: UnderConstruction,
      navigationOptions: {
        tabBarButtonComponent: x => {
          return <FloatingButton navigation={x} />;
        }
      }
    },
    Contacts: {
      screen: Contacts,
      navigationOptions: {
        tabBarIcon: tab => (
          <IconGradient
            size={22}
            color={tab.tintColor}
            name={"list"}
            iconSet={3}
          />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarIcon: tab => (
          <IconGradient
            size={22}
            color={tab.tintColor}
            name={"person-outline"}
            iconSet={2}
          />
        )
      }
    }
  },
  {
    initialRouteName: "Stack1",

    tabBarOptions: {
      activeTintColor: firstGradientColor,
      showLabel: false,
      style: {
        paddingTop: 5,
        paddingBottom: 10
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
