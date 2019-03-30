import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";

class Login extends React.Component {
  changeScreen = () => this.props.navigation.navigate("App");

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <Block flex={0.5} />
        <Block flex={false} center>
          <Image
            source={require("../../assets/logo.png")}
            style={{ height: 35, width: 217 }}
          />
          <Text h2 white style={{ paddingTop: 15 }}>
            Lorem ipsum dolor sit amet consec
          </Text>
        </Block>
        <Block middle center>
          <Block flex={false}>
            <Block
              flex={false}
              card
              style={{
                borderColor: theme.colors.white,
                borderWidth: StyleSheet.hairlineWidth,
                paddingVertical: 15,
                paddingHorizontal: 55
              }}
            >
              <Text h1 white>
                kowalczyk@symu.co
              </Text>
            </Block>
            <Block
              flex={false}
              card
              style={{
                borderColor: theme.colors.white,
                borderWidth: StyleSheet.hairlineWidth,
                paddingVertical: 15,
                paddingHorizontal: 55,
                marginTop: 15
              }}
            >
              <Text h1 white>
                ******************
              </Text>
            </Block>
            <TouchableOpacity
              style={{
                borderRadius: theme.sizes.border,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: "#f33c54",
                paddingVertical: 15,
                paddingHorizontal: 55,
                marginTop: 30
              }}
              onPress={this.changeScreen}
            >
              <Text h1 white>
                LOG IN
              </Text>
            </TouchableOpacity>
          </Block>
        </Block>
      </SafeAreaView>
    );
  }
}

export default Login;
