import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";

import { Block, Text } from "../../components";
import * as theme from "../../theme";
import Carrousel from "../../components/Carrousel";

class Product extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SafeAreaView style={styles.safe}>
          <Block flex={false} row>
            <TouchableOpacity
              style={{
                paddingLeft: 20,
                paddingRight: 35,
                paddingTop: 10
              }}
              onPress={() => navigation.goBack()}
            >
              <Image
                style={{ height: 15, width: 10 }}
                source={require("../../assets/back.png")}
              />
            </TouchableOpacity>
            <Block center style={{ paddingTop: 10 }}>
              <Text h1 bold>
                Details
              </Text>
            </Block>

            <TouchableOpacity
              style={{
                paddingHorizontal: 20,
                paddingTop: 10
              }}
            >
              <Image
                style={{ height: 20, width: 20 }}
                source={require("../../assets/top-right.png")}
              />
            </TouchableOpacity>
          </Block>
        </SafeAreaView>
      )
    };
  };

  renderPhotoViewer() {
    const { product } = this.props;
    const { photos } = product;

    return (
      <Carrousel
        initalSelection={1}
        imageArray={photos}
        imageDimentions={{ height: 310, width: 290 }}
        selectorInactiveStyle={{
          width: 6,
          height: 6,
          borderRadius: 3,
          margin: 3,
          backgroundColor: theme.colors.gray,
          opacity: 0.2
        }}
        selectorActiveStyle={{
          width: 12,
          height: 6,
          borderRadius: 3,
          margin: 3,
          backgroundColor: theme.colors.primary
        }}
        style={{ paddingBottom: 15 }}
      />
    );
  }

  renderInfoCard() {
    const { product } = this.props;
    const { title, price, subtitle, desc } = product;

    let firstDigit = price.toString().slice(0, 1);

    return (
      <Block
        flex={false}
        color={"#FFF"}
        card
        shadow
        style={{
          padding: 15,
          marginHorizontal: 25,
          marginBottom: 20
        }}
      >
        <Block row flex={false} space={"between"} style={{ paddingBottom: 20 }}>
          <Text black size={18} bold style={{ fontFamily: "Analogue-Bold" }}>
            {title}
          </Text>
          <Block flex={false} row left>
            <Text primary size={18} bold>
              {"$"}
            </Text>
            <Text primary h2>
              {firstDigit}
            </Text>
            <Text primary size={18}>
              {price.toString().slice(1)}
            </Text>
          </Block>
        </Block>
        <Block flex={false} space={"between"} style={{ paddingBottom: 10 }}>
          <Text size={14} bold black style={{ paddingBottom: 10 }}>
            {subtitle}
          </Text>
          <Text gray bold style={{ textAlign: "justify", paddingRight: 39 }}>
            {desc}
          </Text>
        </Block>
      </Block>
    );
  }

  renderButtons() {
    return (
      <Block
        flex={false}
        row
        space={"between"}
        style={{ marginHorizontal: 25 }}
      >
        <Block
          flex={false}
          row
          style={{
            borderRadius: 20,
            padding: 5,
            backgroundColor: "rgba(215,215,215,0.3)"
          }}
        >
          <Block
            flex={false}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 9,
              borderRightColor: theme.colors.gray,
              borderRightWidth: StyleSheet.hairlineWidth
            }}
          >
            <Image
              style={{ height: 14, width: 14 }}
              source={require("../../assets/speech.png")}
            />
          </Block>
          <Block
            flex={false}
            style={{
              paddingHorizontal: 14,
              paddingVertical: 9
            }}
          >
            <Image
              style={{ height: 14, width: 14 }}
              source={require("../../assets/star.png")}
            />
          </Block>
        </Block>

        <Block
          row
          middle
          center
          color={"primary"}
          style={{
            borderRadius: 20,
            marginLeft: 20
          }}
        >
          <Image
            style={{ height: 12, width: 14 }}
            resizeMode={"contain"}
            source={require("../../assets/cart-white.png")}
          />
          <Text
            white
            size={14}
            style={{ paddingLeft: 20, fontFamily: "Helvetica" }}
          >
            {"ADD TO CART"}
          </Text>
        </Block>
      </Block>
    );
  }

  render() {
    return (
      <Block style={styles.safe}>
        {this.renderPhotoViewer()}
        {this.renderInfoCard()}
        {this.renderButtons()}
      </Block>
    );
  }
}

Product.defaultProps = {
  product: {
    photos: [
      require("../../assets/d1.jpg"),
      require("../../assets/d2.jpg"),
      require("../../assets/d3.jpg")
    ],
    title: "Spring with lotus",
    price: 199,
    subtitle: "Model is 5'11 and wearing size Small",
    desc:
      "This essential t-shirt dress features V-neck and a relaxed fit for an effortless look that's ready to style"
  }
};

export default Product;

const styles = StyleSheet.create({
  safe: {
    backgroundColor: theme.colors.white
  }
});
