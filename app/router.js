import React, { Component } from 'react';
import { Dimensions, Platform } from 'react-native';
import { StackNavigator, TabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';

import BookList from './screens/BooklIST';
import SearchBooks from './screens/SearchBooks';
import Profile from './screens/Profile';
import BookDetails from './screens/BookDetails';

let screen = Dimensions.get('window');

export const Tabs = TabNavigator({
  'BookList': {
    screen: BookList,
    navigationOptions: {
      tabBarLabel: 'BookList',
      tabBarIcon: ({ tintColor }) => <Icon name="open-book" type="entypo" size={28} color={tintColor} />
    },
  },
  'SearchBooks': {
    screen: SearchBooks,
    navigationOptions: {
      tabBarLabel: 'SearchBooks',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-map-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
  'My Profile': {
    screen: Profile,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => <Icon name="ios-person-outline" type="ionicon" size={28} color={tintColor} />
    },
  },
});

export const BookcaseStack = StackNavigator({
  Bookcase: {
    screen: Bookcase,
    navigationOptions: ({navigation}) => ({
      header: null,
    }),
  },
  EditBook: {
    screen: EditBook,
    navigationOptions: ({navigation}) => ({
      header: null,
      tabBarVisible: false,
      gesturesEnabled: false
    }),
  },
});

export const createRootNavigator = () => {
  return StackNavigator(
    {
      BookcaseStack: {
        screen: BookcaseStack,
        navigationOptions: {
          gesturesEnabled: false
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
      headerMode: "none",
      mode: "modal"
    }
  );
};