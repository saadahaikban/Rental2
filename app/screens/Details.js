import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  FlatList,
  Text,
  View
} from 'react-native';
const util = require('util');

export default class Details extends Component
  static navigationOptions={
    title: 'Book Information',
  };

  render() {
    console.log("this.props.navigation.state = "+ util.inspect(this.props.navigation.state,false,null));
    var{params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <Image source={{params: image}}
        style={styles.thumbnail}
        resizeMode="contain" />
        <Text style={styles.title}>{params:book_title}</Text>
        <Text>{params:author}</Text>
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
