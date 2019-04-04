import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import { sizes, colors, fonts } from "../theme";

export default class Typography extends Component {
  render() {
    const {
      title,
      h1,
      h2,
      small,
      size,
      // styling
      bold,
      center,
      right,
      // colors
      color,
      black,
      white,
      primary,
      secondary,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      title && styles.title,
      h1 && styles.h1,
      h2 && styles.h2,
      small && styles.small,
      size && { fontSize: size },
      bold && styles.bold,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      style // rewrite predefined styles
    ];

    return (
      <Text style={textStyles} {...props}>
        {children}
      </Text>
    );
  }
}

const styles = StyleSheet.create({
  // default style
  text: {
    fontFamily: "Lato-Regular",
    fontSize: sizes.font,
    color: colors.secondary
  },
  // variations
  bold: {
    fontFamily: "Lato-Bold"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  secondary: { color: colors.secondary },
  primary: { color: colors.primary },
  black: { color: colors.black },
  white: { color: colors.white },
  gray: { color: colors.gray },
  // fonts
  title: fonts.title,
  h1: fonts.h1,
  h2: fonts.h2,
  small: fonts.small
});
