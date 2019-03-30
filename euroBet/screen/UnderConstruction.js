import React from "react";
import { View, Text } from "react-native";

export default class UnderConstruction extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center"
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: "600", color: "white" }}>
          {"Sadly, this screen is not implemented yet."}
        </Text>
        <Text style={{ paddingVertical: 10, fontSize: 12, color: "white" }}>
          {"You can help me improve this project by forking it.\n"}
        </Text>
        <Text style={{ paddingTop: 5, fontSize: 12, color: "white" }}>
          {"Any help is appreciated! :)"}
        </Text>
      </View>
    );
  }
}
