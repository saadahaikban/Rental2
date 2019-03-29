import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Container,Content,Header,Button,Icon,Left,Body,Right,Title} from 'native-base';
import RequestForm from './RequestForm';

export default class BookDetails extends Component {
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
        </Content>
      <View style={styles.buttoncontainer}>
       <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('RequestForm');}}>
       <View style={styles.button}>
         <Text style={styles.buttonText}>Request To Borrow</Text>
       </View>
       </TouchableOpacity>
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
  buttoncontainer: {
    paddingTop: 60,
    alignItems: 'center'
  },
  button: {
    alignContent:'center',
    marginBottom: 30,
    width: 260,
    alignItems: 'center',
    backgroundColor: '#2196F3'
  },
  buttonText: {
    padding: 20,
    color: 'white'
  }
});
