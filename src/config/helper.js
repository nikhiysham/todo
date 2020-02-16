import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

const isIPhoneXSize = () => {
    return (height == 812 || width == 812) || (height == 896 || width == 896);
}

const isSmallScreen = () => {
    return width <= 320;
}

const container = () => {
    return isIPhoneXSize() ? { marginBottom: 100 } : { marginBottom: 50 }
}

const log = (data) => {
    // let content = '';

    try {
        return JSON.parse(str);
    } catch (e) {
        console.log('######### LOG:START ########');
        console.log(data);
        console.log('######### LOG:END ########');
        return false;
    }
}

export { isIPhoneXSize, isSmallScreen, container, log };

