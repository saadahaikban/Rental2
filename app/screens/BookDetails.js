import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import {Container,Content,Header,Icon,Button,Left,Body,Right,Title} from 'native-base';

export default class EditBook extends Component {
  render() {
    const{navigation} = this.props;
    const image = navigation.getParam('image',image);
    const title = navigation.getParam('title',title);
    const author = navigation.getParam('author',author);
    const owner = navigation.getParam('owner',owner);

    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name='arrow-back' onPress={() =>{ this.props.navigation.navigate('BookList');} } />
            </Button>
          </Left>
          <Body>
          <Text style={styles.title}>{JSON.stringify(title)}</Text>
          </Body>
          <Right/>
        </Header>
        <Content>
        <Image style={styles.imagestyle} source={{uri: this.props.image}} //not functioning
        resizeMode="contain" />
        <Text>Author:{JSON.stringify(author)}</Text>
        <Text>Owner:{JSON.stringify(owner)}</Text>
        <Button iconLeft>
        <Icon name='ios-book'/>
        <Text>Rent</Text>
        </Button>
        </Content>
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
  title: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  imagestyle: {
    flex: 1,
    height: undefined,
    width: undefined
  },
});
