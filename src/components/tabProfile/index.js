import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import * as Colors from 'themes/colors';
import _ from 'lodash';
import { Text } from 'common/Text';
import ShadowButton from 'common/ShadowButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  profileSection: {
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  itemContainer: {
    marginBottom: 3,
  },
  name: {
    fontWeight: '500',
    color: 'black',
    fontSize: 16,
  },
  logoutBtn: {
    backgroundColor: Colors.primary,
    padding: 10,
    borderRadius: 10
  },
  buttonContainer: {
    marginBottom: 30,
    marginTop: 30,
    marginHorizontal: 30
  },
});

class ProfileIndex extends Component {

  constructor(props) {
    super(props);

    this.state = {};
  }

  renderProfile() {
    const { profile } = this.props;
    return (
      <View style={styles.profileSection}>
        <View style={styles.itemContainer}>
          <Text style={styles.name}>
            {profile.name}
          </Text>
        </View>
        <View style={styles.itemContainer}>
          <Text style={styles.email}>
            {profile.email}
          </Text>
        </View>
      </View>
    );
  }

  renderSignOut() {
    const { signOut } = this.props;
    return (
      <View style={styles.buttonContainer}>
        <ShadowButton
          onPress={() => signOut()}
          label="Sign Out"
          color={Colors.primary}
          customStyles={{ minHeight: 45 }}
        />
      </View>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        {this.renderProfile()}
        {this.renderSignOut()}
      </View>
    );
  }

}

ProfileIndex.propTypes = {
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = store => ({
  profile: Actions.getProfile(store),
});

const mapDispatchToProps = {
  signOut: Actions.signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileIndex);
