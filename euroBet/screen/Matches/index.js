import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  StatusBar,
  ImageBackground,
  TouchableOpacity
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";
import * as mock from "../../mock";

class Matches extends React.Component {
  changeScreen = (i, epoch) => {
    i.epoch = epoch;
    this.props.navigation.navigate("Overview", i);
  };

  renderHeader() {
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
            style={{ height: 43 / 2, width: 46 / 2 }}
            source={require("../../assets/board.png")}
          />
          <Text white h1>
            All Matches
          </Text>
          <Image
            style={{ height: 35 / 2, width: 35 / 2 }}
            source={require("../../assets/search.png")}
          />
        </Block>
      </SafeAreaView>
    );
  }

  renderGameCard(i, epoch, today, firstOfAll) {
    const { live, country, flag, adversary, advFlag, result } = i;

    return (
      <TouchableOpacity
        style={{
          padding: 20,
          margin: 1,
          backgroundColor: theme.colors.white,
          flexDirection: "row",
          justifyContent: "center"
        }}
        onPress={this.changeScreen.bind(this, i, epoch)}
        key={"game_" + country + "_" + adversary}
        disabled={!today}
      >
        <Block row center left>
          <Image style={styles.flag} source={flag} />
          <Text
            style={[{ paddingHorizontal: 8 }, firstOfAll && theme.fonts.h2]}
          >
            {country}
          </Text>
        </Block>

        {live ? (
          <Text size={19} color={"#f33c54"}>
            {result}
          </Text>
        ) : today ? (
          <Text size={19} primary>
            {result}
          </Text>
        ) : (
          <Text>{result}</Text>
        )}

        <Block row center right>
          <Text
            style={[{ paddingHorizontal: 8 }, firstOfAll && theme.fonts.h2]}
          >
            {adversary}
          </Text>
          <Image style={styles.flag} source={advFlag} />
        </Block>
      </TouchableOpacity>
    );
  }

  renderMatches() {
    const { dates } = this.props;
    let firstOfAll = true;

    return (
      <Block flex={false}>
        {dates.map(item => {
          const { date, DOW, epoch, games } = item;

          const today = DOW === "TODAY";

          let gamesComponent = games.map(i => {
            let component = this.renderGameCard(i, epoch, today, firstOfAll);

            if (firstOfAll) firstOfAll = false;

            return component;
          });

          return (
            <Block flex={false} key={"date_" + date}>
              <Block
                flex={false}
                row
                center
                space={"between"}
                style={{ paddingBottom: 10, paddingTop: 15 }}
              >
                <Text>{DOW + " | " + date}</Text>
                <Text>{epoch.toUpperCase()}</Text>
              </Block>
              {gamesComponent}
            </Block>
          );
        })}
      </Block>
    );
  }

  render() {
    return (
      <Block>
        <StatusBar barStyle={"light-content"} />
        <ImageBackground
          source={require("../../assets/background.png")}
          style={{
            width: "101%",
            height: "101%",
            position: "absolute",
            left: -5,
            top: -5
          }}
        />
        {this.renderHeader()}
        <ScrollView
          style={{
            paddingVertical: 5,
            paddingHorizontal: 20,
            backgroundColor: "#eceef2"
          }}
        >
          {this.renderMatches()}
        </ScrollView>
      </Block>
    );
  }
}

Matches.defaultProps = {
  dates: mock.dates
};

const styles = StyleSheet.create({
  flag: {
    height: 34 / 2,
    width: 34 / 2,
    shadowColor: theme.colors.black,
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.1,
    shadowRadius: 2
  }
});

export default Matches;
