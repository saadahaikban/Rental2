import {Platform, StyleSheet, Text, View} from 'react-native';
import React, { Component } from 'react';
import { Dimensions } from 'react-native';
import { createSwitchNavigator, createStackNavigator, createBottomTabNavigator ,createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';

import SearchBooks from './screens/SearchBooks';
import Profile from './screens/Profile';
import BookDetails from './screens/BookDetails';
import BookList from './screens/BookList';
import RequestForm from './screens/RequestForm';
import Hantar from './screens/Hantar';

let screen = Dimensions.get('window');

const Tabs = createBottomTabNavigator({
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
  }
},{
  navigationOptions:({navigation})=>{
    const {routeName} = navigation.state.routes[navigation.state.index];
    return{
      headerTitle:routeName
    };
  }
});


export const AppSwitchNavigator = createSwitchNavigator({
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
    RequestForm:{
      screen: RequestForm,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      }),
    },
    Hantar:{
      screen:Hantar,
      navigationOptions:({navigation}) => ({
        header:null,
        gesturesEnabled:false
      })
    }
  });

export const AppContainer = createAppContainer(AppSwitchNavigator);

export default AppContainer;
