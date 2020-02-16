import React, { Component } from 'react';
import {
  StyleSheet,
  ActivityIndicator,
  View
} from 'react-native';
import PropTypes from 'prop-types';
import * as Colors from 'themes/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white'
  },
});

class Spinner extends Component {

  render() {
    const { show, color, size } = this.props;

    return (
      <View style={styles.container}>
        <ActivityIndicator
          animating={show}
          color={color}
          size={size} />
      </View>
    );
  }

}

Spinner.defaultProps = {
  show: false,
  color: Colors.gray,
  size: 'large'
};

Spinner.propTypes = {
  show: PropTypes.bool,
  color: PropTypes.string
};

export default Spinner;
