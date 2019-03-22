import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import Book from './screens/Book';
import SearchBooks from './screens/SearchBooks';
import Profile from './screens/Profile';
import BookDetails from './screens/BookDetails';
import BookInfo from './screens/BookInfo';
import Book from './screens/Book';
import Details from './screens/Details';

let screen = Dimensions.get('window');

export const Tabs = createBottomTabNavigator({
  'Book': {
    screen: Book,
    navigationOptions: {
      tabBarLabel: 'Book',
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

const Navigation = createStackNavigator({
  Book:{screen:Book},
  Details:{screens:Details}
});

//export const BookStack = createStackNavigator({
//  Book:{
//    screen:Book,
//    navigationOptions:({navigation}) => ({
//      header:null,
//    }),
//  },
//    BookDetails:{
//      screen: BookDetails,
//      navigationOptions:({navigation}) => ({
//        header:null,
//        gesturesEnabled:false
//      }),
//    },
//  });

export const AppContainer = createAppContainer(Tabs,Navigation);

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
export default AppContainer;
