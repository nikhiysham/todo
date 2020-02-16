import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Images from 'themes/images';
import Home from 'src/components/tabHome';

const routeConfiguration = {
  Home: { screen: Home }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'Home',
  headerMode: 'none',
};

const TabHomeNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);

TabHomeNavigator.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => {
    return (
      <Image source={focused ? Images.homeActive : Images.home} style={styles.icon} />
    )
  }
};

const styles = {
  icon: {
    height: 20,
    width: 20
  }
}

export default TabHomeNavigator;
