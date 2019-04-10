import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {Container,Header,Icon,Left,Right,Body,Button,Title} from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container>
      <Header>
        <Left>
        </Left>
        <Body>
          <Title>Lending Status</Title>
        </Body>
        <Right>
        <Button transparent>
          <Icon name="md-exit" onPress={() =>{ this.props.navigation.navigate('BookList');} } />
        </Button>
        </Right>
      </Header>
      <View style={styles.rowText}>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Name :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          IC Number :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Phone Number :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Email :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Book Title :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Book Owner :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Status :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          Start Date to Lend :
        </Text>
        <Text style={styles.label} numberOfLines={2} ellipsizeMode ={'tail'}>
          End Date to Lend :
        </Text>
      </View>
      </Container>

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
  label: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 16,
    color: '#777'
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
  });
