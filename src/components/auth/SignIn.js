import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  KeyboardAvoidingView,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import _ from 'lodash';
import ShadowButton from 'common/ShadowButton';
import * as Colors from 'themes/colors';
import Actions from 'actions';
import { Text } from 'common/Text';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    margin: 20
  },
  headerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  subHeader: {
    color: 'grey',
    fontSize: 13,
    marginTop: 8,
  },
  form: {
    width: '85%',
    flex: 1
  },
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30
  },
  signUpContainer: {
    alignItems: 'center'
  },
  signUpLink: {
    fontWeight: 'bold',
  },
  keyboardView: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

class SignIn extends Component {

  state = {
    form: {
      email: '',
      password: ''
    }
  }

  goToSignUp = () => {
    const { navigation } = this.props;
    navigation.replace('SignUp');
  }

  handleInputChanged = (field, value) => {
    this.setState({ form: { ...this.state.form, [field]: value } });
  }

  handleSignInPressed = () => {
    const { _signIn } = this.props;
    _signIn(this.state.form);
  }

  render() {
    const { form: { email = '', password = '' } } = this.state;

    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>
            Login
          </Text>
        </View>

        <KeyboardAvoidingView style={styles.keyboardView} behavior="padding">
          <View style={styles.form}>
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
                onPress={this.handleSignInPressed}
                label="Login"
                color={Colors.primary}
                customStyles={{ minHeight: 45 }}
              />
            </View>
            <View style={styles.signUpContainer}>
              <Text
                style={styles.signUpLink}
                onPress={this.goToSignUp}
              >
                {" Sign up"}
              </Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    );
  }

}

SignIn.propTypes = {
  _signIn: PropTypes.func.isRequired,
  navigation: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
  _signIn: Actions.signIn
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
