import { NavigationActions, StackActions } from 'react-navigation';
import _ from 'lodash';

let navigator;

function setTopLevelNavigator(navigatorRef) {
  navigator = navigatorRef;
}

function navigate(routeName, params, detailScreen) {
  if (!navigator) return;

  let options = { routeName, params };
  if (detailScreen) {
    options = { ...options, action: NavigationActions.navigate({ routeName: detailScreen }) };
  }
  navigator.dispatch(
    NavigationActions.navigate(options)
  );
}

function back() {
  navigator.dispatch(
    NavigationActions.back()
  );
}


export default {
  setTopLevelNavigator,
  navigate,
  back
};
