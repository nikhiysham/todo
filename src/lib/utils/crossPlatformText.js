import { Platform } from 'react-native';

export const getFontStyleForWeight = (fontFamily, fontWeight) => {
  if (Platform.OS === 'ios') {
    return { fontFamily, fontWeight };
  }

  // eslint-disable-next-line
  fontFamily = fontFamily.replace(/\s+/g, '');

  switch (fontWeight) {
    case '100':
    case '200':
    case '300':
      return { fontFamily: `${fontFamily}-Light`, fontWeight: undefined };

    case 'normal':
    case '400':
      return { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined };

    case '500':
    case '600':
      return { fontFamily: `${fontFamily}-SemiBold`, fontWeight: undefined };

    case 'bold':
    case '700':
      return { fontFamily: `${fontFamily}-Bold`, fontWeight: undefined };

    case '800':
    case '900':
      return { fontFamily: `${fontFamily}-ExtraBold`, fontWeight: undefined };

    default: {
      return (
        fontFamily
          ? { fontFamily: `${fontFamily}-Regular`, fontWeight: undefined }
          : {}
      );
    }
  }
};
