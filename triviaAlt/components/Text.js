import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";

import * as theme from "../theme";

export default class Typography extends Component {
  render() {
    const {
      title,
      footer,
      caption,
      small,
      subtitle,
      size,
      // styling
      bold,
      semibold,
      light,
      center,
      right,
      // colors
      color,
      leader,
      primary,
      secondary,
      black,
      white,
      gray,
      rank,
      stats,
      score,
      style,
      children,
      ...props
    } = this.props;

    const textStyles = [
      styles.text,
      title && styles.title,
      footer && styles.footer,
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
      leader && styles.leader,
      primary && styles.primary,
      secondary && styles.secondary,
      black && styles.black,
      white && styles.white,
      gray && styles.gray,
      rank && styles.rank,
      stats && styles.stats,
      score && styles.score,
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
    // fontFamily: "Montserrat-Regular",
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
  rank: { color: theme.colors.rank },
  stats: { color: theme.colors.stats },
  score: { color: theme.colors.score },
  primary: { color: theme.colors.primary },
  secondary: { color: theme.colors.secondary },
  leader: { color: theme.colors.leader },
  black: { color: theme.colors.black },
  white: { color: theme.colors.white },
  gray: { color: theme.colors.gray },
  // fonts
  title: theme.fonts.title,
  footer: theme.fonts.footer,
  caption: theme.fonts.caption,
  small: theme.fonts.small
});
