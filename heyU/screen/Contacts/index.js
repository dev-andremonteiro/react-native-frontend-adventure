import React from "react";
import { SafeAreaView, StyleSheet, Image, ScrollView } from "react-native";
import { Block, Text, ImageNotify } from "../../components";
import { colors, GradientText, GradientIcon, sizes } from "../../theme";
import { contacts } from "../../mock";

const Item = props => (
  <Block
    white
    row
    center
    middle
    style={{
      paddingVertical: 10,
      paddingHorizontal: 15,
      borderBottomColor: "#ccc",
      borderBottomWidth: StyleSheet.hairlineWidth
    }}
  >
    <ImageNotify icon={props.icon} notify={props.online} size={"small"} />
    <Block style={{ paddingLeft: 10 }}>
      <Text primary h2>
        {props.name}
      </Text>
    </Block>
    <Image
      source={require("../../assets/info.png")}
      style={{ height: 20, width: 20, marginRight: 10 }}
    />
    <Image
      source={require("../../assets/message.png")}
      style={{ height: 20, width: 20 }}
    />
  </Block>
);

export default class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      online: [],
      others: []
    };
  }

  componentWillMount = () => {
    let online = [];
    let others = [];

    this.props.contacts.forEach(e =>
      e.online ? online.push(e) : others.push(e)
    );
    this.setState({ online, others });
  };

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
          Contacts
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

  renderSearch() {
    return (
      <Block flex={false} color={"#e6e6e6"} style={{ padding: 15 }}>
        <Block
          flex={false}
          row
          card
          center
          middle
          white
          style={{ paddingVertical: 10 }}
        >
          <Image
            source={require("../../assets/search-mini.png")}
            style={{ height: 9, width: 9, marginRight: 5 }}
          />
          <Text small>Search friends</Text>
        </Block>
      </Block>
    );
  }

  renderCards(from) {
    let x = from === "online";
    let componentData = x ? this.state.online : this.state.others;

    return (
      <Block flex={false}>
        {x ? (
          <Block row style={styles.title}>
            <Text>{"Online ("}</Text>
            <GradientText style={{ fontSize: sizes.font }}>
              {this.state.online.length}
            </GradientText>
            <Text>{")"}</Text>
          </Block>
        ) : (
          <Block row style={styles.title}>
            <Text>Others</Text>
          </Block>
        )}

        {componentData.map((item, index) => (
          <Item
            icon={item.icon}
            name={item.name}
            online={item.online}
            key={"contact_" + index}
          />
        ))}
      </Block>
    );
  }

  render() {
    return (
      <Block>
        {this.renderHeader()}
        {this.renderSearch()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, backgroundColor: colors.gray }}
          scrollEventThrottle={16}
        >
          {this.state.online.length > 0 && this.renderCards("online")}
          {this.renderCards("other")}
        </ScrollView>
      </Block>
    );
  }
}

Contacts.defaultProps = {
  contacts: contacts
};

const styles = StyleSheet.create({
  title: {
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderBottomColor: "#ccc",
    borderBottomWidth: StyleSheet.hairlineWidth
  }
});
