import React, { Component } from 'react';
import {
  StyleSheet,
  Platform,
  TouchableOpacity,
  View
} from 'react-native';
import * as Colors from 'themes/colors';
import { Text } from 'common/Text';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  button: {
    height: 50,
    marginTop: 10,
    width: '100%',
    borderRadius: 26,
    alignItems: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white'
  },
});

class ShadowButton extends Component {
  render() {
    const { onPress = () => { }, label = '', color, renderIcon, customStyles, customTextStyles, numberOfLines } = this.props;

    return (
      <TouchableOpacity
        activeOpacity={0.8}
        style={[
          styles.button,
          renderIcon ? { flexDirection: 'row' } : {},
          {
            backgroundColor: color,
            ...Platform.select({
              ios: {
                shadowColor: Colors.lightGray,
                shadowOffset: { height: 5, width: 5 },
                shadowOpacity: 0.7,
                shadowRadius: 4,
              },
              android: {
                elevation: 3,
              }
            })
          },
          customStyles
        ]}
        onPress={onPress}
      >
        {renderIcon ? renderIcon : <View />}
        <Text style={[styles.buttonText, customTextStyles]} numberOfLines={numberOfLines}>
          {label}
        </Text>
      </TouchableOpacity>
    );
  }

}

ShadowButton.defaultProps = {
  onPress: () => { },
  label: '',
  color: '',
  numberOfLines: 1
};

ShadowButton.propTypes = {
  onPress: PropTypes.func,
  label: PropTypes.string,
  color: PropTypes.string,
};

export default ShadowButton;
