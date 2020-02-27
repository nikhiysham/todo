import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import * as Colors from 'themes/colors';
import Actions from 'actions';
import { confirmation } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1,
    padding: 10
  },
  cardContainer: {
    justifyContent: 'flex-start',
    flex: 1
  },
  actionContainer: {
    justifyContent: 'flex-end',
    flexDirection: 'row'
  },
  editBtn: {
    marginRight: 10
  },
  edit: {
    color: Colors.blue
  },
  delete: {
    color: Colors.red
  }
});

class ListItem extends Component {

  handleAction = (mode, selected) => {
    const { setUser, deleteUser } = this.props;
    if (mode == 0) { //Edit
      setUser(selected);
      NavigationService.navigate('Update');
    } else {//Delete
      confirmation('Delete confirmation', 'Are you sure to delete this record?', 'Yes', 'No', () => {
        deleteUser(selected);
      });
    }
  }

  render() {
    const {
      item
    } = this.props;

    return (
      <View style={styles.container} >
        <View style={styles.cardContainer}>
          <Text>{item.name}</Text>
        </View>
        <View style={styles.actionContainer}>
          <TouchableOpacity
            style={styles.editBtn}
            onPress={() => this.handleAction(0, item)}>
            <Text style={styles.edit}>Edit</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => this.handleAction(1, item)}>
            <Text style={styles.delete}>Delete</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

}

ListItem.propTypes = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = {
  deleteUser: Actions.deleteUser,
  setUser: Actions.setUser
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
