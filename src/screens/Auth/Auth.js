import React, {Component} from 'react'
import { StyleSheet, Text, View,TouchableOpacity} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


export default class Auth extends Component {


  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        
      
        <TouchableOpacity>
           <Icon size={50} name="ios-trash" color="red" />
          </TouchableOpacity>     
        
      </View>
    )
    }
  }

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding:30
    
    
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:'green'
  },
  inputContainer:{
    //flex:1,
    flexDirection:"row",
    justifyContent:"space-between"
  }

})