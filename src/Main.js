import React, { Component } from 'react';
import {
  StyleSheet, View, YellowBox
} from 'react-native';
import RootNavigator from 'src/components/navigator';
import SplashScreen from 'react-native-splash-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

class Main extends Component {

  componentWillMount() { }

  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={styles.container}>
        <RootNavigator />
      </View>
    );
  }

}

export default Main;
