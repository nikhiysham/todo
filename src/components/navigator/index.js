import React, { Component } from 'react';
import {
  AppState, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Actions from 'actions';
import _ from 'lodash';
import AppNavigator from './AppNavigator';
import NavigationService from './NavigationService';
const styles = StyleSheet.create({
});

class RootNavigator extends Component {

  state = {
    profile: {}
  }

  componentDidMount() {
    const { token } = this.props;

    if (token) {
      NavigationService.navigate('TabBar');
    }
  }

  render() {

    return (
      <AppNavigator
        ref={(navigatorRef) => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }

}

RootNavigator.defaultProps = {
  token: null,
  profile: {},
};

RootNavigator.propTypes = {
  token: PropTypes.string,
  profile: PropTypes.object,
};

const mapStateToProps = store => ({
  token: Actions.getToken(store)
});

const mapDispatchToProps = {
  // signOut: Actions.signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(RootNavigator);
