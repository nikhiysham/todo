import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  TextInput,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import * as Colors from 'themes/colors';
import _ from 'lodash';
import { Text } from 'common/Text';
import ShadowButton from 'common/ShadowButton';
import { alert } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    // margin: 20
  },
  scrollContainer: {
    margin: 20
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
  inputDisabled: {
    backgroundColor: Colors.lightGray,
    fontSize: 14,
    marginTop: 5,
    height: 40,
    flex: 1
  },
  form: {
    width: '85%',
    alignSelf: 'center',
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30,
    // flex: 1
  },
  navbarContainer: {
    backgroundColor: Colors.primary,
    // flex: 1,
    padding: 10,
    height: 50
  },
  back: {
    color: Colors.white
  }
});

class Update extends Component {

  constructor(props) {
    super(props);

    this.state = {
      form: {},
      rerender: false
    };
  }

  static getDerivedStateFromProps(props, state) {
    const { user } = props;
    const { form, rerender } = state;
    if ((form.name !== user.name) && !rerender) {
      return { ...state, form: { ...state.form, id: user.id, name: user.name, email: user.email } }
    }
    return null;
  }

  handleInputChanged = (field, value) => {
    this.setState({ form: { ...this.state.form, [field]: value }, rerender: true });
  }

  handleUpdateUser = () => {
    const { updateUser } = this.props;
    const { form } = this.state;

    if (!this.state.form.name) {
      return alert('Validation error', 'Name is required', 'Ok');
    }

    updateUser(form);
  }

  renderForm() {
    const { form: { name = '', email } } = this.state;

    return (
      <View style={styles.form}>
        <View style={styles.inputContainer}>
          <TextInput
            // style={styles.inputDisabled}
            style={styles.input}
            value={email}
            underlineColorAndroid="transparent"
            editable={false}
          />
        </View>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            value={name}
            onChangeText={(value) => this.handleInputChanged('name', value)}
            underlineColorAndroid="transparent"
            placeholder="Enter Name"
            placeholderTextColor={Colors.lightGray}
            autoCapitalize="none"
            autoCorrect={false}
          />
        </View>
      </View>
    );
  }

  renderSubmit() {
    return (
      <View style={styles.buttonContainer}>
        <ShadowButton
          onPress={this.handleUpdateUser}
          label="Update"
          color={Colors.primary}
          customStyles={{ minHeight: 45 }}
        />
      </View>
    )
  }

  renderNavBar() {
    return (
      <View style={styles.navbarContainer}>
        <TouchableOpacity
          onPress={() => NavigationService.back()}>
          <Text style={styles.back}> {"<"} Back</Text>
        </TouchableOpacity>
      </View>
    )
  }

  renderProfile() {
    const { user } = this.props;

    return (
      <View style={styles.profileContainer}>
        <TouchableOpacity
          onPress={() => NavigationService.back()}>
          <Text style={styles.back}> {"<"} Back</Text>
        </TouchableOpacity>
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderNavBar()}
        <View style={styles.scrollContainer}>
          <ScrollView >
            {this.renderProfile()}
            {this.renderForm()}
            {this.renderSubmit()}
          </ScrollView>
        </View>
      </View>
    );
  }
}

Update.propTypes = {
  user: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  user: Actions.getUser(store),
});

const mapDispatchToProps = {
  updateUser: Actions.updateUser
};

export default connect(mapStateToProps, mapDispatchToProps)(Update);
