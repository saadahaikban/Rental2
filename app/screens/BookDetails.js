import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class EditBook extends Component {
  render() {
    const{navigation} = this.props;
    const title = navigation.getParam('title',title);
    const author = navigation.getParam('author',author);
    const owner = navigation.getParam('owner',owner);

    return (
      <View style={styles.container}>
      <Text>Book Information</Text>
          <Text style={styles.title}>Title:{JSON.stringify(title)}</Text>
          <Text>Author:{JSON.stringify(author)}</Text>
          <Text>Owner:{JSON.stringify(owner)}</Text>
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
