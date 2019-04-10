import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Container,Content,Header,Button,Icon,Left,Body,Right,Title} from 'native-base';
import BookList from './BookList';
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
        <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3v7KDJN7TAoJa5sFaPWcp1HX8JFcpF3z5K3ngz4L6kWoEP7Ca"}}/>
            <Text style={styles.name}>Title: {JSON.stringify(title)} </Text>
            <Text style={styles.status}>Available</Text>
            <Text style={styles.description}>Author:{JSON.stringify(author)}</Text>
            <Text style={styles.description}>Owner:{JSON.stringify(owner)}</Text>
            <Text style={styles.name}></Text>
            <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.props.navigation.navigate('RequestForm');}}>
              <Text style={styles.loginText}>Request To Borrow</Text>
            </TouchableOpacity>
        </View>
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
  productImg:{
    width:200,
    height:200,
  },
  name:{
    fontSize:28,
    color:"#696969",
    fontWeight:'bold'
  },
  status:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    textAlign:'center',
    marginTop:10,
    color:"#696969",
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
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#00b5ec",
  },
  loginText: {
    color: 'white',
  }
});
