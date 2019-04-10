import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity
} from 'react-native';
import {Footer,FooterTab,Button,Icon} from 'native-base';
import BookList from './BookList';
import Signin from './Signin';

export default class Profile extends Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={require('../asset/image/logo.jpg')}/>
            <View style={styles.bodyContent}>
              <Text style={styles.info}></Text>
              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.info}>johndoe@gmail.com</Text>
              <Text style={styles.description}>Current Book: The Bone Collector</Text>
              <Text style={styles.description}>Start Date: 8/4/2019</Text>
              <Text style={styles.description}>Expected End Date: 12/4/2019 </Text>
              <View style={styles.separator}></View>
              <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.props.navigation.navigate('Signin');}}>
                <Text style={styles.loginText}>Logout</Text>
              </TouchableOpacity>
            </View>
          <Footer>
           <FooterTab>
             <Button vertical onPress ={() => {this.props.navigation.navigate('BookList');}}>
               <Icon name="ios-book" />
               <Text>Books</Text>
             </Button>
             <Button vertical active onPress ={() => {this.props.navigation.navigate('Profile');}}>
               <Icon name="person" />
               <Text>Profile</Text>
             </Button>
           </FooterTab>
          </Footer>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  header:{
    backgroundColor: "#00BFFF",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  info:{
    fontSize:16,
    color: "#00BFFF",
    marginTop:10
  },
  description:{
    fontSize:16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center'
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
