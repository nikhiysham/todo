import { createStackNavigator, createAppContainer } from 'react-navigation';
import SignIn from 'src/components/auth/SignIn';
import SignUp from 'src/components/auth/SignUp';
import TabBar from '../tabBar';

const stackNavigatorConfiguration = {
  headerMode: 'none',
  initialRouteName: 'SignIn',
};

export default createAppContainer(createStackNavigator({
  SignIn: { screen: SignIn },
  SignUp: { screen: SignUp },
  TabBar: { screen: TabBar },
}, stackNavigatorConfiguration));
