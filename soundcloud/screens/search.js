import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class SearchScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="I am the SearchScreen"
                    onPress={() => this.props.navigation.navigate('Profile')}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    }
});