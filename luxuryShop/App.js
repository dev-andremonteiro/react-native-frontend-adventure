import React from 'react';
import { ActivityIndicator, Image } from 'react-native';

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
      require('./assets/user.jpg'),
      require('./assets/icon.png'),
      require('./assets/cart.png'),
      require('./assets/pink-drop.png'),
      require('./assets/c1.jpg'),
      require('./assets/c2.jpg'),
      require('./assets/c3.jpg'),
      require('./assets/h1.jpg'),
      require('./assets/h2.jpg'),
      require('./assets/h3.jpg'),
      require('./assets/h4.jpg'),
      require('./assets/d1.jpg'),
      require('./assets/d2.jpg'),
      require('./assets/d3.jpg'),
      require('./assets/back.png'),
      require('./assets/top-right.png'),
      require('./assets/cart-white.png'),
    ]);

    await Font.loadAsync({
      'Analogue-Bold': require('./assets/fonts/Analogue55Regular.ttf'),
      'Gentium-Bold': require('./assets/fonts/GenBasR.ttf'),
    });

    await Promise.all([...imageAssets]).then(() =>
      this.setState({ iconsLoaded: true })
    );
  }

  render() {
    if (!this.state.iconsLoaded) {
      return (
        <Block center middle>
          <ActivityIndicator size={'large'} color={'black'} />
        </Block>
      );
    }

    return <Navigator onNavigationStateChange={null} />;
  }
}
