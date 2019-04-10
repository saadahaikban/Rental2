import React, {Component} from 'react';
import {Alert,StyleSheet, Text, View,TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import {Textarea,Form, Content,Title,Button} from 'native-base';
import Hantar from './Hantar';

export default class RequestForm extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.title}>Book Borrower Information</Text>
      <Input placeholder='Full Name' leftIcon={
        <Icon
          name='user'
          size={20}
          color='#4f9deb'
        />
      }
      />
      <Input placeholder='Identification Number' leftIcon={
        <Icon
          name='id-card'
          size={20}
          color='#4f9deb'
        />
      }
      />
      <Input placeholder='Phone Number' leftIcon={
        <Icon
          name='phone'
          size={20}
          color='#4f9deb'
        />
      }
      />
      <Input placeholder='Email' leftIcon={
        <Icon
          name='envelope'
          size={20}
          color='#4f9deb'
        />
      }
      />

      <Input placeholder='Full Address' leftIcon={
        <Icon
          name='map'
          size={20}
          color='#4f9deb'
        />
      }
      />

      <View style={styles.buttoncontainer}>
      <Text style={styles.name}></Text>
       <TouchableOpacity style={[styles.buttonContainer, styles.loginButton]} onPress={() => {this.props.navigation.navigate('Hantar');}}>
         <Text style={styles.loginText}>Submit</Text>
       </TouchableOpacity>
       </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
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
