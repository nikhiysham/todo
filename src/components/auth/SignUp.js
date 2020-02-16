import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  TextInput
} from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Colors from 'themes/colors';
import Actions from 'actions';
import ShadowButton from 'common/ShadowButton';
import { Text } from 'common/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20
  },
  form: {
    width: '85%',
    alignSelf: 'center',
    flex: 1,
  },
  signInContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30,
    flex: 1
  },
  signUpLink: {
    fontWeight: 'bold',
  },
  keyboardView: {
  },
  inputContainer: {
    paddingHorizontal: 15,
    borderColor: Colors.lightGray,
    borderBottomWidth: 1,
  },
  input: {
    fontSize: 14,
    marginTop: 5,
    height: 40,
    flex: 1
  },
});

class SignUp extends Component {

  state = {
    form: {
      name: '',
      email: '',
      password: ''
    }
  };

  componentDidMount() { }

  goToSignIn = () => {
    const { navigation } = this.props;
    navigation.replace('SignIn');
  }

  handleInputChanged = (field, value) => {
    this.setState({ form: { ...this.state.form, [field]: value } });
  }

  handleSignUpPressed = () => {
    const { _signUp } = this.props;
    _signUp(this.state.form);
  }

  render() {
    const { form: { name = '', email = '', password = '' } } = this.state;

    return (
      <View style={styles.container}>
        <ScrollView style={styles.keyboardView}>
          <View style={styles.form}>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={name}
                onChangeText={(value) => this.handleInputChanged('name', value)}
                underlineColorAndroid="transparent"
                placeholder="Full Name"
                placeholderTextColor={Colors.lightGray}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={email}
                placeholder="eg: test@gmail.com"
                onChangeText={(value) => this.handleInputChanged('email', value)}
                underlineColorAndroid="transparent"
                placeholderTextColor={Colors.lightGray}
                autoCapitalize="none"
                autoCorrect={false}
              />
            </View>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.input}
                value={password}
                onChangeText={(value) => this.handleInputChanged('password', value)}
                underlineColorAndroid="transparent"
                placeholder="******"
                placeholderTextColor={Colors.lightGray}
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
              />
            </View>
            <View style={styles.buttonContainer}>
              <ShadowButton
                onPress={this.handleSignUpPressed}
                label="Register"
                color={Colors.primary}
                customStyles={{ minHeight: 45 }}
              />
            </View>
            <View style={styles.signInContainer}>
              <Text>
                Already registered ?
            <Text
                  style={styles.signUpLink}
                  onPress={this.goToSignIn}
                >
                  {' Sign In !'}
                </Text>

              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }

}

SignUp.propTypes = {
  _signUp: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({});

const mapDispatchToProps = {
  _signUp: Actions.signUp,
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
