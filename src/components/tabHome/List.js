import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import Spinner from 'common/Spinner';
import _ from 'lodash';
import { Text } from 'common/Text';
import * as Colors from 'themes/colors'
import NavigationService from 'src/components/navigator/NavigationService';
import ListItem from './ListItem';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  emptyContainer: {
    justifyContent: 'center',
    alignItems: 'center'
  },
  noRecord: {
    fontWeight: 'bold',
    fontSize: 16
  }
});

class List extends Component {
  state = {}


  renderItem = ({ item }) => {
    const { navigation } = this.props;

    return (
      <ListItem
        item={item}
        navigation={navigation}
      />
    );
  }

  renderList() {
    const { userStore, fetchUserList } = this.props;
    const userList = userStore.data;

    return (
      <FlatList
        data={userList}
        keyExtractor={({ id }) => (`user-${id}`)}
        renderItem={this.renderItem}
        refreshing={userStore.isRefreshing || false}
        onRefresh={() => {
          fetchUserList({ name: '', isRefreshing: true });
        }}
        ListEmptyComponent={() => {
          return (
            <View style={styles.emptyContainer}>
              <Text style={styles.noRecord}>No record</Text>
            </View>
          );
        }}
      />
    );
  }

  render() {
    const {
      userStore: {
        isLoading,
        onEndReached,
        isRefreshing,
      }
    } = this.props;

    if (isLoading && !onEndReached && !isRefreshing) {
      return (
        <Spinner />
      );
    }

    return this.renderList();
  }

}

List.propTypes = {
  fetchUserList: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  userStore: Actions.getUserList(store),
});

const mapDispatchToProps = {
  fetchUserList: Actions.fetchUserList
};

export default connect(mapStateToProps, mapDispatchToProps)(List);
