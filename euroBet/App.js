import React from 'react';
import {
  ActivityIndicator,
  Image,
  ImageBackground,
  StatusBar,
} from 'react-native';

import { Asset } from 'expo-asset';
import * as Font from 'expo-font';

import { Block } from './components';

import Navigator from './screen/navigate';

function loadIcons(images) {
  return images.map((image) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

export default class App extends React.Component {
  state = {
    iconsLoaded: false,
  };

  async componentDidMount() {
    const imageAssets = loadIcons([
      require('./assets/arrow-left.png'),
      require('./assets/background.png'),
      require('./assets/belgium.png'),
      require('./assets/board.png'),
      require('./assets/bookmark-active.png'),
      require('./assets/bookmark-white.png'),
      require('./assets/bookmark.png'),
      require('./assets/cards.png'),
      require('./assets/croatia.png'),
      require('./assets/croatiax3.png'),
      require('./assets/england.png'),
      require('./assets/england-real.png'),
      require('./assets/englandx3.png'),
      require('./assets/flag.png'),
      require('./assets/fouls.png'),
      require('./assets/france.png'),
      require('./assets/gear.png'),
      require('./assets/gear-active.png'),
      require('./assets/germany.png'),
      require('./assets/hungary.png'),
      require('./assets/iceland.png'),
      require('./assets/icon.png'),
      require('./assets/ireland.png'),
      require('./assets/italy.png'),
      require('./assets/logo.png'),
      require('./assets/matches-active.png'),
      require('./assets/matches.png'),
      require('./assets/poland.png'),
      require('./assets/polandx3.png'),
      require('./assets/portugal.png'),
      require('./assets/portugalx3.png'),
      require('./assets/profile-active.png'),
      require('./assets/profile.png'),
      require('./assets/red-card.png'),
      require('./assets/search.png'),
      require('./assets/shots-off.png'),
      require('./assets/shots-target.png'),
      require('./assets/slovakia.png'),
      require('./assets/triangle.png'),
      require('./assets/triangle-right.png'),
      require('./assets/small-ball.png'),
      require('./assets/spain.png'),
      require('./assets/splash.png'),
      require('./assets/substitution.png'),
      require('./assets/switzerland.png'),
      require('./assets/switzerlandx3.png'),
      require('./assets/wales.png'),
      require('./assets/walesx3.png'),
      require('./assets/photo.png'),
      require('./assets/yellow-card.png'),
    ]);

    await Font.loadAsync({
      'Monserrat-Regular': require('./assets/fonts/Montserrat-Regular.otf'),
      'Monserrat-Bold': require('./assets/fonts/Montserrat-Bold.otf'),
    });

    await Promise.all([...imageAssets])
      .then(() => this.setState({ iconsLoaded: true }))
      .catch((e) => console.log(e));
  }

  render() {
    if (!this.state.iconsLoaded) {
      return (
        <Block center middle>
          <ActivityIndicator size={'large'} color={'black'} />
        </Block>
      );
    }
    return (
      <Block>
        <StatusBar barStyle={'light-content'} />
        <ImageBackground
          source={require('./assets/background.png')}
          style={{
            width: '101%',
            height: '101%',
            position: 'absolute',
            left: -5,
            top: -5,
          }}
        />
        <Navigator onNavigationStateChange={null} />
      </Block>
    );
  }
}
