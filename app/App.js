import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import BookList from './screens/BookList';
import SearchBooks from './screens/SearchBooks';
import Profile from './screens/Profile';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'BookList': {
    screen: BookList,
    navigationOptions: {
      tabBarLabel: 'BookList',
      tabBarIcon: ({ tintColor }) => <Icon name="book" type="entypo" size={28} color={tintColor} />
    },
  },
  'SearchBooks': {
    screen: SearchBooks,
    navigationOptions: {
      tabBarLabel: 'SearchBooks',
      tabBarIcon: ({ tintColor }) => <Icon name="browser" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="people" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const AppContainer = createAppContainer(Tabs);
   
export const createRootNavigator = () => {
  return createStackNavigator(
    {
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
  );
};
export default AppContainer;