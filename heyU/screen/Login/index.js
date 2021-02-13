import React from 'react';
import { StatusBar, TouchableOpacity } from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Block, Text } from '../../components';
import { GradientText } from '../../theme';

class Login extends React.Component {
  changeScreen = () => this.props.navigation.navigate('App');

  render() {
    return (
      <LinearGradient
        colors={['#d90646', '#eb402c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{ flex: 1, paddingHorizontal: 45 }}
      >
        <StatusBar barStyle={'light-content'} />
        <Block flex center middle>
          <Text white style={{ fontFamily: 'Lato-Black' }} size={64}>
            HeyU
          </Text>
          <Text white style={{ paddingBottom: 100 }} size={20}>
            Free chat app template
          </Text>
          <Block
            flex={0.12}
            color={'rgba(0,0,0,0.3)'}
            center
            middle
            style={{ width: '100%', marginBottom: 25, borderRadius: 60 }}
          >
            <Text white size={20}>
              johndoe@symu.co
            </Text>
          </Block>
          <Block
            flex={0.12}
            color={'rgba(0,0,0,0.3)'}
            center
            middle
            style={{ width: '100%', marginBottom: 50, borderRadius: 60 }}
          >
            <Text white size={20} style={{ paddingTop: 10 }}>
              *****************
            </Text>
          </Block>
          <TouchableOpacity
            onPress={this.changeScreen}
            style={{ flex: 0.12, width: '100%', marginBottom: 20 }}
          >
            <Block white center middle style={{ borderRadius: 60 }}>
              <GradientText style={{ fontSize: 20 }}>Sign up</GradientText>
            </Block>
          </TouchableOpacity>
          <Text white size={12} bold>
            Already have an account? Sign in
          </Text>
        </Block>
      </LinearGradient>
    );
  }
}

export default Login;
