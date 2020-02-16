import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Text,
  TouchableOpacity,
} from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';
import { SCREEN_WIDTH } from 'src/lib/metrics';
import * as Colors from 'themes/colors';
import Actions from 'actions';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cardContainer: {
    padding: 10,
    // marginVertical: 10,
    borderBottomColor: Colors.lightGray,
    borderBottomWidth: 1
  }
});

class ListItem extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    const {
      item, navigation
    } = this.props;


    return (
      <View style={styles.container} >
        <View style={styles.cardContainer}>
          <Text>{item.name}</Text>
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
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItem);
