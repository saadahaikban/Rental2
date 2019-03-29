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
       <TouchableOpacity onPress={() =>{ this.props.navigation.navigate('Hantar');}}>
       <View style={styles.button}>
         <Text style={styles.buttonText}>Request To Borrow</Text>
       </View>
       </TouchableOpacity>
       </View>
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
