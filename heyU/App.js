import React from 'react';
import { ActivityIndicator, Image, StatusBar } from 'react-native';

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
      require('./assets/delete.png'),
      require('./assets/emoji.png'),
      require('./assets/icon.png'),
      require('./assets/info.png'),
      require('./assets/black-info.png'),
      require('./assets/message.png'),
      require('./assets/more-horizontal.png'),
      require('./assets/more.png'),
      require('./assets/power.png'),
      require('./assets/profile.png'),
      require('./assets/right-arrow.png'),
      require('./assets/left-arrow.png'),
      require('./assets/search.png'),
      require('./assets/search-mini.png'),
      require('./assets/send.png'),
      require('./assets/plus.png'),
      require('./assets/splash.png'),
      require('./assets/user1-mini.png'),
      require('./assets/user1.png'),
      require('./assets/user1x2.png'),
      require('./assets/user1x3.png'),
      require('./assets/user2.png'),
      require('./assets/user2x2.png'),
      require('./assets/user2x3.png'),
      require('./assets/user3.png'),
      require('./assets/user3x2.png'),
      require('./assets/user3x3.png'),
      require('./assets/user4.png'),
      require('./assets/user4x2.png'),
      require('./assets/user4x3.png'),
      require('./assets/user5.png'),
      require('./assets/user5x2.png'),
      require('./assets/user5x3.png'),
      require('./assets/user6.png'),
      require('./assets/user6x2.png'),
      require('./assets/user6x3.png'),
      require('./assets/user7.png'),
      require('./assets/user7x2.png'),
      require('./assets/user7x3.png'),
      require('./assets/user8.png'),
      require('./assets/user8x2.png'),
      require('./assets/user8x3.png'),
    ]);

    await Font.loadAsync({
      'Lato-Regular': require('./assets/fonts/Lato-Regular.ttf'),
      'Lato-Bold': require('./assets/fonts/Lato-Bold.ttf'),
      'Lato-Black': require('./assets/fonts/Lato-Black.ttf'),
      'Lato-Semibold': require('./assets/fonts/Lato-Semibold.ttf'),
    });

    await Promise.all([...imageAssets]).then(() =>
      this.setState({ iconsLoaded: true })
    );
  }

  render() {
    if (!this.state.iconsLoaded) {
      return (
        <Block center middle color={'#eb402c'}>
          <StatusBar barStyle={'light-content'} />
          <ActivityIndicator size={'large'} color={'white'} />
        </Block>
      );
    }
    return <Navigator onNavigationStateChange={null} />;
  }
}
