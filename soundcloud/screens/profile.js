import React, { Component } from 'react';
import { StyleSheet, View, Button } from 'react-native';

export default class ProfileScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Button
                    title="I am the ProfileScreen"
                    onPress={() => this.props.navigation.navigate('Home')}
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