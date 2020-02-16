import React from 'react';
import { Image } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import Images from 'themes/images';
import Profile from 'src/components/tabProfile';

const routeConfiguration = {
  Profile: { screen: Profile }
};

const stackNavigatorConfiguration = {
  initialRouteName: 'Profile',
  headerMode: 'none',
};

const TabProfileNavigator = createStackNavigator(routeConfiguration, stackNavigatorConfiguration);

TabProfileNavigator.navigationOptions = {
  tabBarLabel: 'Profile',
  tabBarIcon: ({ focused }) => {
    return (
      <Image source={focused ? Images.profileActive : Images.profile} style={styles.icon} />
    )
  }
};

const styles = {
  icon: {
    height: 20,
    width: 20
  }
}

export default TabProfileNavigator;
