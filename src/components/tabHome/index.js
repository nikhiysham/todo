import React, { Component } from 'react';
import {
    TextInput,
    StyleSheet,
    View,
    TouchableOpacity,
    Text
} from 'react-native';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Actions from 'actions';
import * as Colors from 'themes/colors'
import NavigationService from 'src/components/navigator/NavigationService';
import List from './List';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchContainer: {
        backgroundColor: Colors.lightGray,
        height: 30,
        margin: 10,
        justifyContent: 'center',
        borderRadius: 10,
        // flexDirection: 'row'
    },
    input: {
        color: 'black',
        fontSize: 14,
        height: 30,
        paddingHorizontal: 5,
        paddingVertical: 0,
    },
    logoutContainer: {
        backgroundColor: Colors.secondary,
        alignItems: 'flex-end',
        padding: 10
    },
    logout: {
        color: Colors.white
    }
});

class Home extends Component {

    state = {
        name: ''
    }

    componentDidMount() {
        const { fetchUserList } = this.props;
        fetchUserList({ name: this.state.name });
    }

    handleSearch = (name) => {
        const { fetchUserList } = this.props;
        fetchUserList({ name: this.state.name });
    }

    renderSearch() {
        const { name } = this.state;

        return (
            <View style={styles.searchContainer}>
                <TextInput
                    style={styles.input}
                    placeholder={'Input name here'}
                    underlineColorAndroid="transparent"
                    placeholderTextColor={Colors.white}
                    autoCapitalize="none"
                    autoCorrect={false}
                    value={name}
                    onChangeText={(text) => {
                        this.setState({ name: text }, () => {
                            this.handleSearch(this.state.name);
                        });
                    }}
                />
            </View>
        );
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={styles.container}>
                {this.renderSearch()}
                <List navigation={navigation} />
            </View>
        );
    }

}

Home.propTypes = {
};

const mapStateToProps = store => ({
});

const mapDispatchToProps = {
    fetchUserList: Actions.fetchUserList,
    signOut: Actions.signOut
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
