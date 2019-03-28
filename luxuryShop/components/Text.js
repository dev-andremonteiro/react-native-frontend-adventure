import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import * as theme from "../theme";

export default class Typography extends Component {
  render() {
    const {
      title,
      h1,
      h2,
      caption,
      small,
      size,
      // styling
      bold,
      semibold,
      light,
      center,
      right,
      // colors
      color,
      primary,
      black,
      white,
      gray,
      light_gray,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      title && styles.title,
      h1 && styles.h1,
      h2 && styles.h2,
      caption && styles.caption,
      small && styles.small,
      size && { fontSize: size },
      bold && styles.bold,
      semibold && styles.semibold,
      light && styles.light,
      center && styles.center,
      right && styles.right,
      color && styles[color],
      color && !styles[color] && { color },
      // color shortcuts
      primary && styles.primary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      light_gray && styles.light_gray,
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
    fontFamily: "Gentium-Bold",
    fontSize: theme.sizes.font,
    color: theme.colors.black
  },
  // variations
  bold: {
    fontWeight: "bold"
  },
  semibold: {
    fontWeight: "500"
  },
  light: {
    fontWeight: "200"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  light_gray: { color: theme.colors.light_gray },
  primary: { color: theme.colors.primary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  // fonts
  title: theme.fonts.title,
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  caption: theme.fonts.caption,
  small: theme.fonts.small
});
