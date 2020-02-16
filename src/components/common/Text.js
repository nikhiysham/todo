import React from 'react';
import ReactNative, { StyleSheet } from 'react-native';
import { getFontStyleForWeight } from 'src/lib/utils/crossPlatformText';

const styles = {
  defaultStyle: {
    fontFamily: 'Poppins',
    color: 'black',
  },
};

function Text({ style, ...props }) {
  let flatStyle = StyleSheet.flatten(style);
  flatStyle = { ...styles.defaultStyle, ...flatStyle };

  const fontStyle = getFontStyleForWeight(flatStyle.fontFamily, flatStyle.fontWeight);
  const updatedFontStyle = { ...flatStyle, ...fontStyle };

  return (
    <ReactNative.Text
      style={[updatedFontStyle]}
      {...props}
    />
  );
}

export { Text };
