import { createBottomTabNavigator } from 'react-navigation';
import * as Colors from 'themes/colors';
import TabHome from './TabHomeNavigator';
import TabProfile from './TabProfileNavigator';

const routeConfiguration = {
  TabHome: { screen: TabHome },
  TabProfile: { screen: TabProfile },
};

const tabBarConfiguration = {
  tabBarPosition: 'bottom',
  lazy: true,
  initialRouteName: "TabHome", // Set default route name
  tabBarOptions: {
    activeTintColor: Colors.white,
    inactiveTintColor: '#7CC78E',
    showLabel: true,
    style: {
      backgroundColor: Colors.primary
    },
    tabStyle: {
      padding: 0,
    },
  }
};

export default createBottomTabNavigator(routeConfiguration, tabBarConfiguration);
