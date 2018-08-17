/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createSwitchNavigator, createBottomTabNavigator } from 'react-navigation';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './screens/home';
import LoginScreen from './screens/login';
import StreamScreen from './screens/stream';
import SearchScreen from './screens/search';
import ProfileScreen from './screens/profile';

const Tabs = createBottomTabNavigator({
  Home: HomeScreen,
  Stream: StreamScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
},{
  navigationOptions: ({navigation}) => ({
    tabBarIcon: ({tintColor}) => {
      const {routeName} = navigation.state;
      let iconName;
      if (routeName === 'Home') {
        iconName = 'home';
      }
      else if (routeName === 'Search'){
        iconName = 'search';
      }
      else if (routeName === 'Stream'){
        iconName = 'flash'
      }
      else if (routeName === 'Profile'){
        iconName = 'account'
      }
      return iconName === 'search'?
      <MaterialIcons name = {iconName} size = {25} color = {tintColor} />:
      <MaterialCommunityIcons name = {iconName} size = {25} color = {tintColor} />

    }
  }),
  tabBarOptions: {
    activeTintColor: "#fff",
    inactiveTintColor: 'grey',
    activeBackgroundColor: 'grey',
    showLabel: false,
    style: {
      backgroundColor: "#000"
    }
  }
});

export default Switch = createSwitchNavigator({
  Login: LoginScreen,
  Home: Tabs
}, { initialRouteName: 'Login' })

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
