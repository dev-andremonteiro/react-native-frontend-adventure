import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity,
  RefreshControl
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";
import * as mock from "../../mock";
import SectionWithCards from "../../components/SectionWithCards";

const typeHelper = {
  yellow: {
    text: " gets a yellow card.",
    icon: (
      <Image
        source={require("../../assets/yellow-card.png")}
        style={{ width: 16 / 2, height: 21 / 2 }}
      />
    )
  },
  substitution: {
    text: " is on for ",
    icon: (
      <Image
        source={require("../../assets/substitution.png")}
        style={{ width: 24 / 2, height: 25 / 2 }}
      />
    )
  },
  goal: {
    text: " scores for ",
    icon: (
      <Image
        source={require("../../assets/small-ball.png")}
        style={{ width: 24 / 2, height: 24 / 2 }}
      />
    )
  }
};

const StatsGraphComponent = function(props) {
  const { n, total, sufix } = props;

  return (
    <Block flex={false} center middle>
      <Text h1 primary style={{ paddingBottom: 10 }}>
        {sufix ? n.toString() + sufix : n}
      </Text>

      <Block
        flex={false}
        color={theme.colors.secondary}
        style={{ height: 2, width: 80, borderRadius: 2 }}
      >
        <Block
          color={theme.colors.primary}
          style={{ width: 80 * (n / total) }}
        />
      </Block>
    </Block>
  );
};

const ChatBubble = function(props) {
  if (props.left)
    return (
      <Block flex={false} row center>
        <Block flex={false} row white style={{ borderRadius: 3 }}>
          <Block
            flex={false}
            style={{
              padding: 10
            }}
          >
            <Text>{props.player}</Text>
          </Block>
          <Block
            flex={false}
            style={{
              backgroundColor: theme.colors.secondary,
              width: StyleSheet.hairlineWidth,
              marginVertical: 10
            }}
          />
          <Block
            flex={false}
            style={{
              padding: 10
            }}
          >
            <Text primary>{props.time}</Text>
          </Block>
        </Block>
        <Image
          style={{ height: 13 / 2, width: 8 / 2 }}
          source={require("../../assets/triangle.png")}
        />
      </Block>
    );

  return (
    <Block flex={false} row center>
      <Image
        style={{ height: 13 / 2, width: 8 / 2 }}
        source={require("../../assets/triangle-right.png")}
      />
      <Block flex={false} row white style={{ borderRadius: 3 }}>
        <Block
          flex={false}
          style={{
            padding: 10
          }}
        >
          <Text primary>{props.time}</Text>
        </Block>
        <Block
          flex={false}
          style={{
            backgroundColor: theme.colors.secondary,
            width: StyleSheet.hairlineWidth,
            marginVertical: 10
          }}
        />
        <Block
          flex={false}
          style={{
            padding: 10
          }}
        >
          <Text>{props.player}</Text>
        </Block>
      </Block>
    </Block>
  );
};

const Line = function(props) {
  let defaultH = props.h ? props.h : 30;

  const lineComponent = (
    <Block
      flex={false}
      color={theme.colors.secondary}
      style={[
        { width: StyleSheet.hairlineWidth, height: defaultH },
        props.style
      ]}
    />
  );

  const ballComponent = (
    <Block
      flex={false}
      color={theme.colors.secondary}
      style={{ width: 5, height: 5, borderRadius: 2.5 }}
    />
  );

  if (props.start)
    return (
      <Block center>
        {ballComponent}
        {lineComponent}
      </Block>
    );
  if (props.end)
    return (
      <Block center>
        {lineComponent}
        {ballComponent}
      </Block>
    );
  return lineComponent;
};

class Overview extends React.Component {
  state = {
    selectedTab: 0
  };

  componentDidMount() {
    if (this.props.navigation.state.params.live)
      this.setState({ selectedTab: 1 });
  }

  renderHeader() {
    const {
      advFlagx3,
      adversary,
      country,
      flagx3,
      live,
      result,
      epoch
    } = this.props.navigation.state.params;

    const { time } = this.props.liveStream;

    return (
      <SafeAreaView>
        <Block
          flex={false}
          row
          space={"between"}
          center
          style={{ padding: 15 }}
        >
          <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
            <Image
              style={{ height: 23 / 2, width: 36 / 2 }}
              source={require("../../assets/arrow-left.png")}
            />
          </TouchableOpacity>
          <Text white h1>
            Match Overview
          </Text>
          <Image
            style={{ height: 40 / 2, width: 24 / 2 }}
            source={require("../../assets/bookmark-white.png")}
          />
        </Block>
        <Block
          flex={false}
          style={{
            paddingTop: 10,
            paddingBottom: 45,
            paddingHorizontal: 40,
            alignItems: "flex-end"
          }}
          row
          middle
        >
          <Block flex={false} center middle>
            <Image style={styles.flag} source={flagx3} />
            <Text h2 white style={{ paddingTop: 5 }}>
              {country}
            </Text>
          </Block>

          <Block center space={"between"}>
            <Text white>{epoch}</Text>
            <Text size={34} white style={{ paddingVertical: 5 }}>
              {result}
            </Text>
            {live ? (
              <Text h2 white>
                {time}
              </Text>
            ) : (
              <Text h2 white>
                {"End"}
              </Text>
            )}
          </Block>

          <Block flex={false} center middle>
            <Image style={styles.flag} source={advFlagx3} />
            <Text h2 white style={{ paddingTop: 5 }}>
              {adversary}
            </Text>
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
            "Lineup",
            "Live stream",
            "Highlights",
            "Stats",
            "Draw",
            "Bet now"
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

  renderLiveStream() {
    const { moments } = this.props.liveStream;
    const { live } = this.props.navigation.state.params;

    let secondHalf = moments.length > 1;

    return (
      <Block flex={false} style={{ paddingBottom: 20 }}>
        {moments.map((item, index) => {
          const title = secondHalf ? "SECOND HALF" : "FIRST HALF";
          secondHalf = false;

          let c = item.map((i, n) => {
            const { type, time, player } = i;
            const { text, icon } = typeHelper[type];

            return (
              <Block
                row
                middle
                white
                style={{
                  paddingHorizontal: 20,
                  paddingVertical: 15,
                  margin: StyleSheet.hairlineWidth
                }}
                key={"moment_" + time + "_" + n}
              >
                <Block row center left>
                  {icon}
                  <Text primary style={[{ paddingLeft: 8 }]}>
                    {player}
                  </Text>
                  <Text>{text}</Text>
                  {type === "goal" && (
                    <Text>
                      {this.props.navigation.state.params[i.from] + "!"}
                    </Text>
                  )}
                  {type === "substitution" && (
                    <Text primary>{i.out + "."}</Text>
                  )}
                </Block>

                <Block flex={false} row center right>
                  <Text primary>{time}</Text>
                </Block>
              </Block>
            );
          });

          return <SectionWithCards title={title} inside={c} key={index} />;
        })}
      </Block>
    );
  }

  renderHighlights() {
    const secondHalf = this.props.highlights.length > 1;

    return (
      <Block center>
        {this.props.highlights.map((item, index) => {
          let timeComp = item.map((i, n) => {
            if (!i) return;

            const { type, time, player, from } = i;
            const { icon } = typeHelper[type];
            const left = from === "country";

            const bubbleComp = (
              <ChatBubble time={time} player={player} left={left} />
            );

            return (
              <Block center key={"moment_" + n.toString() + "_half_" + index}>
                <Block row center>
                  <Block middle style={{ alignItems: "flex-end" }}>
                    {left && bubbleComp}
                  </Block>
                  <Block flex={0.3} center middle>
                    <Line h={15} />
                    <Block
                      flex={false}
                      white
                      center
                      middle
                      style={{
                        height: 24,
                        width: 24,
                        borderRadius: 12
                      }}
                    >
                      {icon}
                    </Block>
                    <Line h={15} />
                  </Block>
                  <Block>{!left && bubbleComp}</Block>
                </Block>
              </Block>
            );
          });

          return (
            <Block
              center
              style={{ paddingTop: 10 }}
              key={"half_" + index.toString()}
            >
              <Line start />
              {timeComp}
              <Line end />
              {secondHalf && index === 0 && (
                <Text style={{ padding: 20 }}>HALF TIME</Text>
              )}
            </Block>
          );
        })}
        <Text style={{ padding: 20 }}>START</Text>
      </Block>
    );
  }

  renderStats() {
    let c = this.props.stats.map((item, index) => {
      const { title, icon, country, adversary, total } = item;
      const percentage = title === "Ball possesion";

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
          <StatsGraphComponent
            n={country}
            total={total}
            sufix={percentage && "%"}
          />
          <Block center middle>
            {icon}
            <Text style={{ paddingTop: 10 }} small>
              {title}
            </Text>
          </Block>
          <StatsGraphComponent
            n={adversary}
            total={total}
            sufix={percentage && "%"}
          />
        </Block>
      );
    });

    return <SectionWithCards inside={c} />;
  }

  render() {
    let content = this.underConstruction();

    switch (this.state.selectedTab) {
      case 1:
        content = this.renderLiveStream();
        break;
      case 2:
        content = this.renderHighlights();
        break;
      case 3:
        content = this.renderStats();
        break;
    }

    return (
      <Block>
        <StatusBar barStyle={"light-content"} />
        <ImageBackground
          source={require("../../assets/background.png")}
          style={styles.bg}
        />
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
        </ScrollView>
      </Block>
    );
  }
}

Overview.defaultProps = {
  liveStream: mock.liveStream,
  stats: mock.stats,
  highlights: mock.highlights
};

const styles = StyleSheet.create({
  bg: {
    width: "101%",
    height: "101%",
    position: "absolute",
    left: -5,
    top: -5
  },
  flag: {
    height: 93 / 2,
    width: 93 / 2
  }
});

export default Overview;
