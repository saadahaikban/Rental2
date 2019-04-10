import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  FlatList,
  Text,
  View,
  Image,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native';
import {Footer,FooterTab,Button,Icon} from 'native-base';

import BookDetails from './BookDetails';
import Profile from './Profile';


export default class BookList extends Component{
  constructor(){
    super()
    this.state={
      dataSource:[]
    }
  }

  renderItem =({item})=>{
    return(
      <TouchableOpacity style={styles.rowContainer}
      onPress={() =>{ this.props.navigation.navigate('BookDetails');}}>
        <Image style={{width:100,height:100}}
          source={{uri:item.image}} />
        <View style={styles.rowText}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode ={'tail'}>
            {item.book_title}
          </Text>
          <Text style={styles.author} numberOfLines={1} ellipsizeMode ={'tail'}>
            Author: {item.author}
          </Text>
          <Text style={styles.owner} numberOfLines={1} ellipsizeMode ={'tail'}>
            Owner: {item.owner}
          </Text>
        </View>
      </TouchableOpacity>
    )
  }

componentDidMount(){
const url='http://www.json-generator.com/api/json/get/bUdGVIxGJK?indent=2'
  fetch(url)
  .then((response)=>response.json())
  .then((responseJson) => {
    this.setState({
      dataSource:responseJson.rent_book,
    })
  })
  .catch((error)=>{
    console.log(error)
  })
}

render(){
 return(

   <View style={styles.container}>
     <FlatList
       data={this.state.dataSource}
       renderItem={this.renderItem}
       keyExtractor ={(item,index)=> item}
     />
     <Footer>
      <FooterTab>
        <Button vertical active onPress ={() => {this.props.navigation.navigate('BookList');}}>
          <Icon name="ios-book" />
          <Text>Books</Text>
        </Button>
        <Button vertical onPress ={() => {this.props.navigation.navigate('Profile');}}>
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
    fontSize: 12,
    color: '#777'
  },
  owner: {
    paddingLeft: 10,
    marginTop: 5,
    fontSize: 12,
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
