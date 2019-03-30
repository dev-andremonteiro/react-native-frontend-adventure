import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import * as theme from "../theme";

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
    fontFamily: "Monserrat-Bold",
    fontSize: theme.sizes.font,
    color: theme.colors.secondary
  },
  // variations
  bold: {
    fontFamily: "Monserrat-Regular"
  },
  // position
  center: { textAlign: "center" },
  right: { textAlign: "right" },
  // colors
  secondary: { color: theme.colors.secondary },
  primary: { color: theme.colors.primary },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  // fonts
  title: theme.fonts.title,
  h1: theme.fonts.h1,
  h2: theme.fonts.h2,
  small: theme.fonts.small
});
