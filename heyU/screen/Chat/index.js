import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  ScrollView
} from "react-native";
import { Block, Text } from "../../components";
import { sizes, colors, GradientIcon } from "../../theme";
import { chat } from "../../mock";
import { LinearGradient } from "expo";

export default class Chat extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SafeAreaView
          style={{
            backgroundColor: "#FFF",
            borderBottomColor: "#ccc",
            borderBottomWidth: StyleSheet.hairlineWidth
          }}
        >
          <Block
            row
            space={"between"}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              alignItems: "flex-start"
            }}
          >
            <TouchableOpacity
              style={{
                paddingTop: 5,
                alignItems: "center",
                justifyContent: "center"
              }}
              onPress={() => navigation.goBack()}
              hitSlop={{ top: 20, bottom: 20, left: 20, right: 20 }}
            >
              <GradientIcon
                source={require("../../assets/left-arrow.png")}
                style={{ height: 16, width: 16 }}
              />
            </TouchableOpacity>
            <Text primary h2>
              {navigation.state.params.name}
            </Text>
            <Block flex={false} center middle>
              <GradientIcon
                source={require("../../assets/black-info.png")}
                style={{ height: 20, width: 20 }}
              />
            </Block>
          </Block>
        </SafeAreaView>
      )
    };
  };

  state = { text: "", messages: [], getUp: false };

  componentWillMount = () => {
    this.setState({ messages: this.props.chat });
  };

  sendMessage = () => {
    let messages = this.state.messages;
    messages.push({ message: this.state.text });
    this.setState({ text: "", messages });
  };

  render() {
    const { icon, miniIcon } = this.props;

    return (
      <Block>
        <ScrollView
          ref={ref => {
            this.scrollView = ref;
          }}
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingTop: 20,
            paddingHorizontal: 10
          }}
        >
          {this.state.messages.map((item, index) => {
            const { message, from, hour } = item;

            let messageComponent = null;

            if (from) {
              messageComponent = (
                <Block row center key={index} style={{ marginBottom: 25 }}>
                  <Image
                    source={icon}
                    style={{ height: 24, width: 24, alignSelf: "flex-end" }}
                  />

                  <LinearGradient
                    colors={["#d90646", "#eb402c"]}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                      padding: 10,
                      borderRadius: sizes.border,
                      borderBottomLeftRadius: 0,
                      marginHorizontal: 10,
                      flexDirection: "row"
                    }}
                  >
                    <Text white>{message}</Text>
                    {index === 3 && (
                      <Image
                        source={require("../../assets/emoji.png")}
                        style={{ height: 16, width: 16 }}
                      />
                    )}
                  </LinearGradient>
                  {hour && <Text>{hour}</Text>}
                </Block>
              );
            } else {
              messageComponent = (
                <Block row center right key={index}>
                  <Block
                    flex={false}
                    style={{ alignItems: "flex-end", marginBottom: 10 }}
                  >
                    <Block
                      flex={false}
                      color={colors.gray}
                      card
                      style={{
                        padding: 10,
                        borderBottomRightRadius: 0
                      }}
                    >
                      <Text primary>{message}</Text>
                    </Block>
                    {index === 4 ? (
                      <Image
                        source={miniIcon}
                        style={{ height: 14, width: 14, marginVertical: 5 }}
                      />
                    ) : (
                      <Block
                        flex={false}
                        style={{ height: 14, width: 14, marginVertical: 5 }}
                      />
                    )}
                  </Block>
                </Block>
              );
            }

            return messageComponent;
          })}
        </ScrollView>
        <KeyboardAvoidingView
          behavior="padding"
          keyboardVerticalOffset={70}
          style={{ flexDirection: "row" }}
        >
          <Block>
            <TextInput
              style={{
                height: 60,
                borderTopColor: "#ddd",
                borderTopWidth: StyleSheet.hairlineWidth,
                backgroundColor: colors.gray,
                paddingHorizontal: 20
              }}
              onChangeText={text => this.setState({ text })}
              value={this.state.text}
              placeholder={"Your message..."}
              placeholderTextColor={colors.secondary}
              clearTextOnFocus
              onFocus={() => {
                this.scrollView.scrollTo({ x: 0, y: 180 });
              }}
            />
          </Block>
          <TouchableOpacity
            onPress={this.sendMessage}
            style={{ width: 60, height: 60 }}
          >
            <LinearGradient
              colors={["#d90646", "#eb402c"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 0, y: 1 }}
              style={{
                width: 60,
                height: 60,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/send.png")}
                style={{ height: 18, width: 21, marginTop: 3 }}
              />
            </LinearGradient>
          </TouchableOpacity>
        </KeyboardAvoidingView>
      </Block>
    );
  }
}

Chat.defaultProps = {
  chat: chat,
  icon: require("../../assets/user1.png"),
  miniIcon: require("../../assets/user1-mini.png")
};
