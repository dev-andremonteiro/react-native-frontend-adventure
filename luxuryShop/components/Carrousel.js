import React from "react";
import { Image, ScrollView } from "react-native";

import { Block } from "../components";

class Carrousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedCard: null
    };
  }

  componentWillMount() {
    this.setState({ selectedCard: this.props.initalSelection });
  }

  render() {
    const {
      style,
      initalSelection,
      imageArray,
      imageDimentions,
      spaceSeparator,
      selectorInactiveStyle,
      selectorActiveStyle,
      selector
    } = this.props;
    let cardWidth = imageDimentions.width + spaceSeparator;

    return (
      <Block flex={false} style={style}>
        <ScrollView
          ref={snapScroll => {
            this.snapScroll = snapScroll;
          }}
          horizontal
          showsHorizontalScrollIndicator={false}
          pagingEnabled
          contentOffset={{
            x: initalSelection * cardWidth,
            y: 0
          }}
          onScroll={event => {
            let x = event.nativeEvent.contentOffset.x;
            this.scrollingRight = x > this.lastX;
            this.lastX = x;
          }}
          onResponderRelease={() => {
            let snapTo = this.scrollingRight
              ? Math.ceil(this.lastX / cardWidth)
              : Math.floor(this.lastX / cardWidth);
            if (snapTo < 0) {
              this.snapScroll.scrollTo({ x: 0, y: 0 });
            } else if (snapTo === imageArray.length) {
              this.snapScroll.scrollTo({
                x: (snapTo - 1) * cardWidth,
                y: 0
              });
            } else {
              this.setState({ selectedCard: snapTo });

              let scrollTo = snapTo * cardWidth;
              this.snapScroll.scrollTo({ x: scrollTo, y: 0 });
            }
          }}
          scrollEventThrottle={16}
          style={{ paddingVertical: 15 }}
          contentContainerStyle={{
            alignItems: "flex-end"
          }}
        >
          {imageArray.map((item, index) => {
            const selected = this.state.selectedCard === index;
            const selectedStyle = {
              height: imageDimentions.height + spaceSeparator,
              width: imageDimentions.width + spaceSeparator
            };
            const even = index % 2 === 0;
            const centerLast = index === imageArray.length - 1;
            const centerFirst = index === 0;

            return (
              <Block
                flex={false}
                shadow
                key={"item_" + index}
                style={[
                  even && { marginHorizontal: spaceSeparator },
                  centerLast && { marginRight: spaceSeparator * 1.5 },
                  centerFirst && { marginLeft: spaceSeparator * 1.5 }
                ]}
              >
                <Block flex={false} card style={{ overflow: "hidden" }}>
                  <Block flex={false}>
                    <Image
                      source={item}
                      resizeMode={"stretch"}
                      style={[imageDimentions, selected && selectedStyle]}
                    />
                  </Block>
                </Block>
              </Block>
            );
          })}
        </ScrollView>
        {selector && (
          <Block flex={false} center middle row>
            {imageArray.map((item, index) => {
              return (
                <Block flex={false} key={"ball_" + index}>
                  <Block
                    flex={false}
                    style={
                      this.state.selectedCard === index
                        ? selectorActiveStyle
                        : selectorInactiveStyle
                    }
                  />
                </Block>
              );
            })}
          </Block>
        )}
      </Block>
    );
  }
}

Carrousel.defaultProps = {
  initalSelection: 0,
  spaceSeparator: 20,
  selectorInactiveStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: "#000",
    opacity: 0.2
  },
  selectorActiveStyle: {
    width: 6,
    height: 6,
    borderRadius: 3,
    margin: 3,
    backgroundColor: "#000"
  },
  selector: true
};

export default Carrousel;
