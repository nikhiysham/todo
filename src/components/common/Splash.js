import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
} from 'react-native';
import { SCREEN_WIDTH, SCREEN_HEIGHT } from 'src/lib/metrics';

const images = {
  splash: require('img/launch_screen.png')
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  image: {
    width: SCREEN_WIDTH,
    height: SCREEN_HEIGHT,
  },
});

export default class Splash extends Component {

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={images.splash}
          style={styles.image}
        />
      </View>
    );
  }

}
