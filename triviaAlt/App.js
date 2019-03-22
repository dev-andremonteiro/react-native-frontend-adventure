import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
  StatusBar
} from "react-native";
import { Asset } from "expo";

import { Block, Text } from "./components";
import * as theme from "./theme";

class App extends React.Component {
  state = {
    iconsLoaded: false,
    selectedCard: 0
  };

  loadIcons(images) {
    return images.map(image => {
      if (typeof image === "string") {
        return Image.prefetch(image);
      } else {
        return Asset.fromModule(image).downloadAsync();
      }
    });
  }

  async componentDidMount() {
    const imageAssets = this.loadIcons([
      require("./assets/back.png"),
      require("./assets/collapse.png"),
      require("./assets/fire.png"),
      require("./assets/fire-active.png"),
      require("./assets/light.png"),
      require("./assets/light-active.png"),
      require("./assets/ranking.png"),
      require("./assets/star.png"),
      require("./assets/star-active.png"),
      require("./assets/top-left.png"),
      require("./assets/top-right.png")
    ]);
    await Promise.all([...imageAssets]).then(() =>
      this.setState({ iconsLoaded: true })
    );
  }

  renderHeader() {
    let { user } = this.props;

    return (
      <Block
        flex={false}
        center
        middle
        row
        style={styles.header}
        space={"between"}
      >
        <Image
          style={styles.topIcon}
          source={require("./assets/top-left.png")}
        />
        <Block center space={"between"}>
          <Text secondary caption bold>
            WELCOME
          </Text>
          <Text white title bold style={{ paddingTop: 5 }}>
            {user}
          </Text>
        </Block>
        <Image
          style={styles.topIcon}
          source={require("./assets/top-right.png")}
        />
      </Block>
    );
  }

  renderCards() {
    const { status } = this.props;
    const { selectedCard } = this.state;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scroll}
        onScroll={event => {
          let x = event.nativeEvent.contentOffset.x;
          if (x < 0 || x > 310) return;
          if (x >= 80)
            this.setState({ selectedCard: Math.floor((x - 80) / 170) + 1 });
          else this.setState({ selectedCard: 0 });
        }}
        scrollEventThrottle={16}
      >
        <Block
          space={"between"}
          style={[styles.card, selectedCard === 0 && styles.rank]}
        >
          <Image
            style={styles.cardIcon}
            source={
              selectedCard === 0
                ? require("./assets/light-active.png")
                : require("./assets/light.png")
            }
          />
          <Text title bold white>
            {status.rank.toString()}
          </Text>
          <Block flex={false}>
            <Text caption bold white>
              Your rank
            </Text>
            <Text
              small
              semibold
              gray
              style={[
                { paddingTop: 5 },
                selectedCard === 0 && { color: theme.colors.light_white }
              ]}
            >
              Between 5,346 Users
            </Text>
          </Block>
        </Block>

        <Block
          space={"between"}
          style={[styles.card, selectedCard === 1 && styles.stats]}
        >
          <Image
            style={styles.cardIcon}
            source={
              selectedCard === 1
                ? require("./assets/star-active.png")
                : require("./assets/star.png")
            }
          />
          <Text title bold white>
            {status.answers.toString() + "%"}
          </Text>
          <Block flex={false}>
            <Text caption bold white>
              Correct Answers
            </Text>
            <Text
              small
              semibold
              gray
              style={[
                { paddingTop: 5 },
                selectedCard === 1 && { color: theme.colors.light_white }
              ]}
            >
              At your first attempt
            </Text>
          </Block>
        </Block>

        <Block
          space={"between"}
          style={[styles.card, selectedCard === 2 && styles.score]}
        >
          <Image
            style={styles.cardIcon}
            source={
              selectedCard === 2
                ? require("./assets/fire-active.png")
                : require("./assets/fire.png")
            }
          />
          <Text title bold white>
            {status.score.toString()}
          </Text>
          <Block flex={false}>
            <Text caption bold white>
              Your Score
            </Text>
            <Text
              small
              semibold
              gray
              style={[
                { paddingTop: 5 },
                selectedCard === 2 && { color: theme.colors.light_white }
              ]}
            >
              After two weeks
            </Text>
          </Block>
        </Block>
        <Block
          color={"leader"}
          space={"between"}
          style={[styles.card, { marginRight: 50, borderWidth: 0 }]}
        >
          <Image
            style={styles.cardIcon}
            source={require("./assets/ranking.png")}
          />
          <Block flex={false}>
            <Text caption bold white>
              Go to Leaderboard
            </Text>
          </Block>
        </Block>
      </ScrollView>
    );
  }

  renderFooter() {
    return (
      <Block
        center
        color={"white"}
        style={{
          paddingTop: 10,
          marginHorizontal: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20
        }}
      >
        <Image
          style={styles.cardIcon}
          source={require("./assets/collapse.png")}
        />
        <Text black bold footer style={{ paddingTop: 10 }}>
          Week 2
        </Text>
      </Block>
    );
  }

  render() {
    if (!this.state.iconsLoaded) {
      return (
        <Block center middle>
          <Text>Loading</Text>
        </Block>
      );
    }

    return (
      <ImageBackground
        source={require("./assets/back.png")}
        style={styles.safe}
      >
        <SafeAreaView style={styles.safe}>
          <StatusBar barStyle={"light-content"} />
          {this.renderHeader()}
          {this.renderCards()}
          {this.renderFooter()}
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

App.defaultProps = {
  user: "Michael S.",
  status: {
    rank: 384,
    answers: 45,
    score: 3.684
  },
  week: 2
};

export default App;

const styles = StyleSheet.create({
  safe: {
    flex: 1
  },
  header: {
    paddingTop: 30,
    paddingBottom: 55,
    paddingHorizontal: 20
  },
  scroll: {
    paddingLeft: 20
  },
  card: {
    width: 150,
    height: 300,
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 10,
    marginHorizontal: 5,
    borderColor: theme.colors.gray,
    borderWidth: 1
  },
  rank: {
    height: 340,
    borderWidth: 0,
    backgroundColor: theme.colors.rank
  },
  stats: {
    height: 340,
    borderWidth: 0,
    backgroundColor: theme.colors.stats
  },
  score: {
    height: 340,
    borderWidth: 0,
    backgroundColor: theme.colors.score
  },
  topIcon: {
    height: 32,
    width: 32
  },
  cardIcon: {
    height: 22,
    width: 22
  }
});
