import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';
const util=require('util');

export default class Book extends Component{
  static navigationOptions ={
    title:'Book',
  };

  constructor(){
    super()
    this.state={
      dataSource:[],
      isLoading:true
    }
  }

  renderItem =({item})=>{
    return(
    //  <TouchableOpacity style={styles.rowContainer}
    //  onPress={() => ToastAndroid.show(item.book_title,ToastAndroid.SHORT)}>
      <TouchableOpacity style={styles.rowContainer} onPress={()=> navigate("Details",{book_title:this.props.book_title,author:this.props.author,image:this.props.image}) } >
        <Image style={{width:100,height:100}}
          source={{uri:item.image}} />
        <View style={styles.rowText}>
          <Text style={styles.title}>
            {item.book_title}
          </Text>
          <Text style={styles.author}>
            {item.author}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

componentDidMount(){
const url='http://www.json-generator.com/api/json/get/ccLAsEcOSq?indent=1'
  fetch(url)
  .then((response)=>response.json())
  .then((responseJson) => {
    this.setState({
      dataSource:responseJson.book_array,
      isLoading:false
    })
  })
  .catch((error)=>{
    console.log(error)
  })
}

  render(){
    console.log("this.props.navigation = " + util.inspect(this.props.navigation,false,null));
    var {navigate} = this.props.navigation;
    return(
      this.state.isLoading
      ?
      <View style={{flex:1, justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#330066" animating/>
      </View>
      :
      <View style={styles.container}>
        <FlatList
          data={this.state.dataSource}
          renderItem={this.renderItem}
          keyExtractor ={(item,index)=> index}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  rowContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    height: 100,
    padding: 10,
    marginRight: 10,
    marginLeft: 10,
    marginTop: 10,
    borderRadius: 4,
    shadowOffset:{  width: 1,  height: 1,  },
    shadowColor: '#CCC',
    shadowOpacity: 1.0,
    shadowRadius: 1
  },
  title: {
    paddingLeft: 10,
    paddingTop: 5,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#777'
  },
  author: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 14,
    color: '#777'
  },
  thumbnail: {
    flex: 1,
    height: undefined,
    width: undefined
  },
  rowText: {
    flex: 4,
    flexDirection: 'column'
  }
});
