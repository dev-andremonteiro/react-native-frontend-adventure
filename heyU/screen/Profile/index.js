import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Switch,
} from 'react-native';

import { LinearGradient } from 'expo-linear-gradient';

import { Block, Text } from '../../components';
import { profile } from '../../mock';
import { GradientText, sizes } from '../../theme';

class Item extends React.Component {
  render() {
    const { title, text, custom, paintTitle } = this.props;

    return (
      <Block
        row
        center
        space={'between'}
        white
        style={{
          height: 50,
          paddingHorizontal: 15,
          borderBottomWidth: StyleSheet.hairlineWidth,
          borderBottomColor: '#ccc',
        }}
      >
        {paintTitle ? (
          <GradientText style={{ fontSize: sizes.h2, fontWeight: '600' }}>
            {title}
          </GradientText>
        ) : (
          <Text primary h2>
            {title}
          </Text>
        )}
        <Block row right center>
          {text && !custom && <Text style={{ paddingRight: 15 }}>{text}</Text>}
          {custom
            ? custom
            : !paintTitle && (
                <Image
                  source={require('../../assets/right-arrow.png')}
                  style={{ height: 12, width: 7.5 }}
                />
              )}
        </Block>
      </Block>
    );
  }
}

export default class Profile extends React.Component {
  state = {
    switch: false,
  };

  componentDidMount() {
    this.setState({ switch: this.props.info.notifications });

    this._navListener1 = this.props.navigation.addListener('willFocus', () =>
      StatusBar.setBarStyle('light-content')
    );
    this._navListener2 = this.props.navigation.addListener('willBlur', () =>
      StatusBar.setBarStyle('default')
    );
  }

  componentWillUnmount() {
    this._navListener1.remove();
    this._navListener2.remove();
  }

  renderHeader = () => {
    const { icon, name, description } = this.props.info;

    return (
      <LinearGradient
        colors={['#d90646', '#eb402c']}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
      >
        <SafeAreaView>
          <Block
            flex={false}
            row
            space={'between'}
            style={{
              paddingHorizontal: 10,
              paddingVertical: 15,
              alignItems: 'flex-start',
            }}
          >
            <Text white h2 style={{ fontFamily: 'Lato-Semibold' }}>
              Edit
            </Text>
            <Block flex={false} center middle style={{ paddingTop: 5 }}>
              <Image
                source={require('../../assets/power.png')}
                style={{ height: 17, width: 16 }}
              />
            </Block>
          </Block>
          <Block
            flex={false}
            center
            middle
            style={{ paddingTop: 5, paddingBottom: 35, paddingHorizontal: 50 }}
          >
            <Image
              source={icon}
              style={{ height: 90, width: 90, marginBottom: 25 }}
            />
            <Text white bold title style={{ marginBottom: 15 }}>
              {name}
            </Text>
            <Text white small style={{ textAlign: 'center' }}>
              {description}
            </Text>
          </Block>
        </SafeAreaView>
      </LinearGradient>
    );
  };

  render() {
    const { email, telephone } = this.props.info;

    return (
      <Block>
        {this.renderHeader()}
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1 }}
          scrollEventThrottle={16}
        >
          {[
            {
              title: 'Email address',
              text: email,
            },
            {
              title: 'Telephone',
              text: telephone,
            },
            {
              title: 'Notifications',
              custom: (
                <Switch
                  onValueChange={() =>
                    this.setState({ switch: !this.state.switch })
                  }
                  value={this.state.switch}
                  trackColor={{ false: '#ccc', true: '#d90646' }}
                />
              ),
            },
            {
              title: 'Settings',
            },
            {
              title: 'Feedback',
            },
            {
              title: 'Get Help',
            },
            {
              title: 'Delete account',
              paint: true,
            },
          ].map((item, index) => {
            const { title, text, custom, paint } = item;
            return (
              <Item
                title={title}
                text={text}
                custom={custom}
                paintTitle={paint}
                key={'option_' + index}
              />
            );
          })}
        </ScrollView>
      </Block>
    );
  }
}

Profile.defaultProps = {
  info: profile,
};
