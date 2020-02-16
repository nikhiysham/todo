import React, { Component } from 'react';
import { StyleSheet, YellowBox } from 'react-native';
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux';
import configureStore from 'src/redux/store/configureStore';
import Main from 'src/Main';
import Spinner from 'common/Spinner';
YellowBox.ignoreWarnings([
  'Warning: Async Storage has been extracted...',
  'Warning: ViewPagerAndroid has been extracted...',
]);
console.disableYellowBox = true;

export default class App extends Component {
  constructor(props) {
    super(props);

    const { store, persistor } = configureStore();
    this.state = {
      store,
      persistor,
    };
  }


  render() {
    const { store, persistor } = this.state;

    return (
      <Provider store={store} loading={<Spinner />}>
        <PersistGate persistor={persistor}>
          <Main />
        </PersistGate>
      </Provider>
    );
  }
}

