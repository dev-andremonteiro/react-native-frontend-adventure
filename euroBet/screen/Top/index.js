import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  RefreshControl,
  Image,
  TouchableOpacity
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";
import * as mock from "../../mock";
import SectionWithCards from "../../components/SectionWithCards";

class Top extends React.Component {
  state = {
    selectedTab: 1
  };

  renderHeader() {
    const { title, goals, club, assists } = this.props;

    return (
      <SafeAreaView>
        <Block
          flex={false}
          row
          space={"between"}
          center
          style={{ padding: 15 }}
        >
          <Image
            style={{ height: 23 / 2, width: 36 / 2 }}
            source={require("../../assets/arrow-left.png")}
          />
          <Text white h1>
            Top players
          </Text>
          <Image
            style={{ height: 35 / 2, width: 35 / 2 }}
            source={require("../../assets/search.png")}
          />
        </Block>
        <Block flex={false} center>
          <Image
            style={{ height: 180 / 2, width: 180 / 2 }}
            source={require("../../assets/photo.png")}
          />

          <Block
            flex={false}
            row
            center
            space={"between"}
            style={{ paddingVertical: 20 }}
          >
            <Block center middle>
              <Text white title style={{ paddingBottom: 5 }}>
                {goals}
              </Text>
              <Text white>GOALS</Text>
            </Block>
            <Block center middle>
              <Text size={19} white style={{ paddingBottom: 5 }}>
                {title}
              </Text>
              <Text white>{club}</Text>
            </Block>
            <Block center middle>
              <Text white title style={{ paddingBottom: 5 }}>
                {assists}
              </Text>
              <Text white>ASSISTS</Text>
            </Block>
          </Block>
        </Block>
      </SafeAreaView>
    );
  }

  underConstruction() {
    return (
      <Block center middle style={{ padding: 100 }}>
        <Text>UnderConstruction</Text>
      </Block>
    );
  }

  renderSelectTab() {
    return (
      <Block flex={0.15} white>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{ backgroundColor: theme.colors.white, padding: 5 }}
        >
          {[
            "Overall",
            "Top Scorers",
            "Assists",
            "Top speed",
            "Most valued"
          ].map((i, n) => {
            const selected = this.state.selectedTab === n;

            return (
              <TouchableOpacity
                style={{ padding: 10 }}
                onPress={() => this.setState({ selectedTab: n })}
                key={n}
              >
                <Text h2 style={selected && { color: theme.colors.primary }}>
                  {i}
                </Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </Block>
    );
  }

  renderTopScores() {
    let c = this.props.topScores.map((item, index) => {
      const { name, goals } = item;
      return (
        <Block
          flex={false}
          row
          middle
          white
          style={{
            alignItems: "flex-end",
            paddingHorizontal: 20,
            paddingVertical: 10,
            margin: 1
          }}
          key={"stats_" + index}
        >
          <Text>{index + 2}</Text>
          <Block center middle>
            <Text primary>{name}</Text>
          </Block>
          <Text>{goals}</Text>
        </Block>
      );
    });

    return <SectionWithCards title={["RANK", "PLAYER", "GOALS"]} inside={c} />;
  }

  render() {
    let content = this.underConstruction();

    switch (this.state.selectedTab) {
      case 1:
        content = this.renderTopScores();
        break;
    }

    return (
      <Block>
        {this.renderHeader()}
        {this.renderSelectTab()}
        <ScrollView
          style={{
            flex: 1,
            paddingVertical: 5,
            paddingHorizontal: 20,
            backgroundColor: "#eceef2"
          }}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={() => this.setState({ refreshing: false })}
            />
          }
        >
          {content}
          <Block style={{ height: 30 }} />
        </ScrollView>
      </Block>
    );
  }
}

Top.defaultProps = {
  title: "Gareth Bale",
  club: "WALES",
  goals: 8,
  assists: 2,
  topScores: mock.top
};

export default Top;
