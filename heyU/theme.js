import React from 'react';
import { Image, MaskedViewIOS, Platform, Text } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

export const colors = {
  primary: '#363636',
  secondary: '#b9b9b9',
  gray: '#f8f8f8',
  black: '#000',
  white: '#FFF',
};

export const sizes = {
  // global sizes
  font: 14,
  border: 10,

  // font sizes
  title: 22,
  h1: 18,
  h2: 16,
  small: 12,
};

export const fonts = {
  h1: {
    fontSize: sizes.h1,
  },
  h2: {
    fontSize: sizes.h2,
  },
  small: {
    fontSize: sizes.small,
  },
  title: {
    fontSize: sizes.title,
  },
};

export const GradientText = (props) => {
  if (Platform.OS === 'ios')
    return (
      <MaskedViewIOS maskElement={<Text {...props} />}>
        <LinearGradient
          colors={['#d90646', '#eb402c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Text {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedViewIOS>
    );

  return <Text {...props} style={[props.style, { color: '#d90646' }]} />;
};

export const GradientIcon = (props) => {
  if (Platform.OS === 'ios')
    return (
      <MaskedViewIOS maskElement={<Image {...props} />}>
        <LinearGradient
          colors={['#d90646', '#eb402c']}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
        >
          <Image {...props} style={[props.style, { opacity: 0 }]} />
        </LinearGradient>
      </MaskedViewIOS>
    );

  return <Image {...props} />;
};
