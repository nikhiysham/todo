import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Images from 'themes/images';
import Home from 'src/components/tabHome';
import Update from 'src/components/tabHome/Update';

const routeConfiguration = {
  Home: { screen: Home },
  Update: { screen: Update }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

const TabHomeNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);

TabHomeNavigator.navigationOptions = ({ navigation }) => {
  // console.log('#NAV:', navigation)
  const { state } = navigation;
  return {
    tabBarLabel: 'Home',
    tabBarVisible: state.index < 1,
    tabBarIcon: ({ focused }) => {
      return (
        <Image source={focused ? Images.homeActive : Images.home} style={styles.icon} />
      )
    }
  }
};

const styles = {
  icon: {
    height: 20,
    width: 20
  }
}

export default TabHomeNavigator;
