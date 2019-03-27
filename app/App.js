import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SearchBooks from './screens/SearchBooks';
import Profile from './screens/Profile';
import BookDetails from './screens/BookDetails';
import BookInfo from './screens/BookInfo';
import BookList from './screens/BookList';

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
      tabBarIcon: ({ tintColor }) => <Icon name="ios-compass" type="ionicon" size={28} color={tintColor} />
    },
  },
  'Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-contact" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const BookStack = createStackNavigator({
  BookList:{
    screen:BookList,
    navigationOptions:({navigation}) => ({
      header:null,
    }),
  },
    BookDetails:{
      screen: BookDetails,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      }),
    },
  });

export const createRootNavigator = () => {
  return createStackNavigator(
    {
      BookStack:{
        screen:BookStack,
        navigationOptions:{
          gesturesEnabled:false
        }
      },
      Tabs: {
        screen: Tabs,
        navigationOptions: {
          gesturesEnabled: false
        }
      }
    },
    {
      headerMode:"none",
      mode:"modal"
    }
  );
};
export const AppContainer = createAppContainer(Tabs);

export default AppContainer;
