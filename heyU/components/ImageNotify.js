import React, { Component } from "react";
import { Image, View } from "react-native";
import { LinearGradient } from "expo";

export default class ImageNotify extends Component {
  state = {
    imageSize: 50,
    topOffset: 35,
    leftOffset: 35,
    whiteBallSize: 14,
    colorBallSize: 10
  };

  componentWillMount() {
    if (this.props.size === "small") {
      this.setState({
        imageSize: 32,
        topOffset: 24,
        leftOffset: 22,
        whiteBallSize: 10,
        colorBallSize: 7
      });
    }
  }

  render() {
    return (
      <View style={{ alignItems: "center", justifyContent: "center" }}>
        <Image
          source={this.props.icon}
          style={{ height: this.state.imageSize, width: this.state.imageSize }}
        />
        <View
          style={{
            position: "absolute",
            top: this.state.topOffset,
            left: this.state.leftOffset,
            opacity: this.props.notify ? 1 : 0
          }}
        >
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#FFF",
              height: this.state.whiteBallSize,
              width: this.state.whiteBallSize,
              borderRadius: this.state.whiteBallSize / 2
            }}
          >
            <LinearGradient
              colors={["#d90646", "#eb402c"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                height: this.state.colorBallSize,
                width: this.state.colorBallSize,
                borderRadius: this.state.colorBallSize / 2
              }}
            />
          </View>
        </View>
      </View>
    );
  }
}
