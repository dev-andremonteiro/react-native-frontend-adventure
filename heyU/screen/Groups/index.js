import React from "react";
import { SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import { Block, Text } from "../../components";
import { sizes, colors, GradientText, GradientIcon } from "../../theme";
import { groups } from "../../mock";

export default class Groups extends React.Component {
  renderHeader = () => (
    <SafeAreaView
      style={{
        backgroundColor: "#FFF",
        borderBottomColor: "#ccc",
        borderBottomWidth: StyleSheet.hairlineWidth
      }}
    >
      <Block
        flex={false}
        row
        space={"between"}
        style={{
          paddingHorizontal: 10,
          paddingVertical: 15,
          alignItems: "flex-start"
        }}
      >
        <GradientText
          style={{ fontFamily: "Lato-Semibold", fontSize: sizes.h2 }}
        >
          Edit
        </GradientText>
        <Text primary h2>
          Groups
        </Text>
        <Block flex={false} center middle style={{ paddingTop: 5 }}>
          <GradientIcon
            source={require("../../assets/plus.png")}
            style={{ height: 14, width: 14 }}
          />
        </Block>
      </Block>
    </SafeAreaView>
  );

  render() {
    return (
      <Block>
        {this.renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          scrollEventThrottle={16}
          contentContainerStyle={{
            paddingVertical: 20,
            paddingHorizontal: 15
          }}
        >
          {this.props.groups.map((item, index) => {
            const { name, last, icons } = item;
            const memberNumber = icons.length;

            return (
              <Block
                row
                white
                shadow
                style={{ height: 140, marginBottom: 20 }}
                key={"group_" + index}
              >
                <Block center>
                  <Image
                    source={require("../../assets/more-horizontal.png")}
                    style={{
                      height: 16,
                      width: 4,
                      margin: 10,
                      alignSelf: "flex-end"
                    }}
                  />
                  <Text h1 primary>
                    {name}
                  </Text>
                  <Block
                    row
                    flex={false}
                    center
                    middle
                    style={{ marginTop: 5, marginBottom: 10 }}
                  >
                    <Text>{last}</Text>
                    <Block
                      flex={false}
                      color={colors.secondary}
                      style={{
                        height: 3,
                        width: 3,
                        borderRadius: 1.5,
                        marginHorizontal: 10
                      }}
                    />
                    <Text>{memberNumber + " members"}</Text>
                  </Block>
                  <Block row flex={false}>
                    {icons.map((i, n) => (
                      <Image
                        source={i}
                        style={{ height: 24, width: 24, marginHorizontal: 5 }}
                        key={"icon_" + n}
                      />
                    ))}
                  </Block>
                </Block>
              </Block>
            );
          })}
        </ScrollView>
      </Block>
    );
  }
}

Groups.defaultProps = {
  groups: groups
};
