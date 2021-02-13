import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Swipeout from 'react-native-swipeout';

import { LinearGradient } from 'expo-linear-gradient';

import { Block, ImageNotify, Text } from '../../components';
import { messages } from '../../mock';
import { GradientIcon, GradientText, sizes } from '../../theme';

const swipeoutBtns = [
  {
    component: (
      <Block color={'#ddd'} center space={'between'} style={{ padding: 15 }}>
        <Image
          source={require('../../assets/more.png')}
          style={{ height: 4, width: 16, marginTop: 9 }}
        />
        <Text primary>More</Text>
      </Block>
    ),
  },
  {
    component: (
      <LinearGradient
        colors={['#d90646', '#eb402c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 15,
          flex: 1,
        }}
      >
        <Image
          source={require('../../assets/delete.png')}
          style={{ height: 18, width: 14 }}
        />
        <Text white>Delete</Text>
      </LinearGradient>
    ),
  },
];

export default class Messages extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      header: (
        <SafeAreaView
          style={{
            backgroundColor: '#FFF',
            borderBottomColor: '#ccc',
            borderBottomWidth: StyleSheet.hairlineWidth,
          }}
        >
          <Block
            row
            space={'between'}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'flex-start',
            }}
          >
            <GradientText
              style={{ fontFamily: 'Lato-Semibold', fontSize: sizes.h2 }}
            >
              Edit
            </GradientText>
            <Text primary h2>
              Messages
            </Text>
            <Block flex={false} center middle style={{ paddingTop: 5 }}>
              <GradientIcon
                source={require('../../assets/search.png')}
                style={{ height: 18, width: 18 }}
              />
            </Block>
          </Block>
        </SafeAreaView>
      ),
    };
  };

  changeScreen = (i) => {
    this.props.navigation.navigate('Chat', i);
  };

  render() {
    return (
      <Block>
        <StatusBar barStyle={'default'} />
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          contentContainerStyle={{ paddingBottom: 20 }}
          scrollEventThrottle={16}
        >
          {this.props.messages.map((item) => {
            const { icon, name, lastMessage, time, notification } = item;

            return (
              <Swipeout
                right={swipeoutBtns}
                key={'message_' + name}
                backgroundColor={'#FFF'}
                sensitivity={5}
              >
                <TouchableOpacity
                  style={{
                    height: 75,
                    padding: 15,
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                  onPress={this.changeScreen.bind(this, item)}
                  delayPressIn={50}
                >
                  <ImageNotify icon={icon} notify={notification} />
                  <Block middle style={{ paddingLeft: 15 }}>
                    <Block row space={'between'}>
                      <Text primary h1 style={{ paddingBottom: 5 }}>
                        {name}
                      </Text>
                      <Text h2>{time}</Text>
                    </Block>
                    <Block>
                      <Text small>{lastMessage}</Text>
                    </Block>
                  </Block>
                </TouchableOpacity>
              </Swipeout>
            );
          })}
        </ScrollView>
      </Block>
    );
  }
}

Messages.defaultProps = {
  messages: messages,
};
