import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Content,Item,Input} from 'native-base';
import { Icon } from 'react-native-elements';

export default class SearchBooks extends Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content"/>
          <Content searchBar>
            <Item>
              <Input placeholder="Search Books"/>
              <Icon name="search" />
            </Item>
          </Content>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  }
});