import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";

class Home extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SafeAreaView style={styles.safe}>
          <Block
            flex={false}
            row
            space={"between"}
            style={{
              paddingHorizontal: 20,
              paddingTop: 10,
              paddingBottom: 20
            }}
          >
            <Image
              style={{ height: 25, width: 25, borderRadius: 30 / 2 }}
              source={require("../../assets/user.jpg")}
            />
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/icon.png")}
            />
            <Image
              style={{ height: 25, width: 25 }}
              source={require("../../assets/cart.png")}
            />
          </Block>
        </SafeAreaView>
      )
    };
  };

  changeScreen = () => this.props.navigation.navigate("Product");

  renderSectionHeader(title) {
    return (
      <Block
        flex={false}
        center
        row
        style={{ paddingVertical: 10, paddingHorizontal: 20 }}
      >
        <Image
          source={require("../../assets/pink-drop.png")}
          style={{ zIndex: -1, position: "absolute", left: 8 }}
        />
        <Text h1 bold style={{ fontFamily: "Analogue-Bold" }}>
          {title}
        </Text>
        <Block style={{ paddingLeft: 15 }}>
          <Block
            flex={false}
            color={theme.colors.gray}
            style={{ width: 15, height: StyleSheet.hairlineWidth }}
          />
        </Block>
        <Text
          color={theme.colors.gray}
          small
          style={{
            fontFamily: "Analogue-Bold",
            textDecorationLine: "underline",
            paddingRight: 5
          }}
        >
          View all
        </Text>
      </Block>
    );
  }

  renderCategories() {
    const { categories } = this.props;

    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={{
          paddingLeft: 20,
          paddingBottom: 20
        }}
      >
        {categories.map((item, index) => {
          const { name, image } = item;

          return (
            <Block flex={false} style={{ marginRight: 15 }} key={index}>
              <Block flex={false}>
                <Image
                  source={image}
                  style={{
                    height: 125,
                    width: 110,
                    borderRadius: theme.sizes.border
                  }}
                />
              </Block>
              <Block flex={false}>
                <Text h2 style={{ paddingVertical: 5 }}>
                  {name}
                </Text>
              </Block>
            </Block>
          );
        })}
      </ScrollView>
    );
  }

  renderSelectedCat() {
    const { products } = this.props;
    let duplicate = [...products];
    let secondHalf = duplicate.splice(duplicate.length / 2);

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={{ paddingHorizontal: 20 }}
      >
        <Block row>
          {[duplicate, secondHalf].map((item, index) => {
            let halfCards = item.map((item2, index2) => {
              const { name, pop, fav, image } = item2;
              const leftColumn = index === 0;
              const favIcon = fav
                ? require("../../assets/star-active.png")
                : require("../../assets/star.png");

              return (
                <TouchableOpacity
                  key={"product_card_" + index2}
                  onPress={this.changeScreen}
                >
                  <Block flex={false} shadow style={{ marginBottom: 20 }}>
                    <Block flex={false} card style={{ overflow: "hidden" }}>
                      <Block
                        flex={false}
                        style={{ height: leftColumn ? 150 : 180, width: 153 }}
                      >
                        <Image source={image} />
                      </Block>
                      <Block
                        row
                        center
                        color={"#FFF"}
                        space={"between"}
                        style={{ padding: 10 }}
                      >
                        <Block>
                          <Text h2 style={{ paddingBottom: 5 }}>
                            {name}
                          </Text>
                          <Text bold small gray>
                            {pop}
                          </Text>
                        </Block>
                        <Block
                          flex={false}
                          style={{
                            paddingVertical: 10,
                            paddingHorizontal: 8
                          }}
                        >
                          <Image
                            source={favIcon}
                            style={{ height: 17, width: 17 }}
                          />
                        </Block>
                      </Block>
                    </Block>
                  </Block>
                </TouchableOpacity>
              );
            });

            return (
              <Block
                flex={false}
                key={"half_" + index}
                style={{ marginRight: 20 }}
              >
                {halfCards}
              </Block>
            );
          })}
        </Block>
      </ScrollView>
    );
  }

  render() {
    return (
      <Block>
        <Block flex={false}>
          {this.renderSectionHeader("All Product")}
          {this.renderCategories()}
        </Block>
        <Block>
          {this.renderSectionHeader("Spring clothing")}
          {this.renderSelectedCat()}
        </Block>
      </Block>
    );
  }
}

Home.defaultProps = {
  categories: [
    { name: "Sweater", image: require("../../assets/c1.jpg") },
    { name: "Spring clothing", image: require("../../assets/c2.jpg") },
    { name: "A suit", image: require("../../assets/c3.jpg") }
  ],
  products: [
    {
      name: "Tide product",
      pop: "6.89+popularity",
      fav: false,
      image: require("../../assets/h1.jpg")
    },
    {
      name: "Small and pure",
      pop: "hot last week",
      fav: false,
      image: require("../../assets/h2.jpg")
    },
    {
      name: "Have a good ",
      pop: "6.89+popularity",
      fav: true,
      image: require("../../assets/h3.jpg")
    },
    {
      name: "Glamurous",
      pop: "best deal",
      fav: false,
      image: require("../../assets/h4.jpg")
    }
  ]
};

export default Home;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.colors.white
  }
});
