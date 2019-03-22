import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class EditBook extends Component {
  render() {
    const{navigation} = this.props;
    const itemId = navigation.getParam('itemId',id);
    const title = navigation.getParam('title',title);

    return (
      <View style={styles.container}>
      <Text>Book Information</Text>
        <Text style={styles.title}>
          <Text>ItemId:{JSON.stringify(itemId)}</Text>
          <Text>Title:{JSON.stringify(title)}</Text>
        </Text>
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
