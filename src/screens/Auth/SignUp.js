import React, {Component} from 'react'
import { StyleSheet, Text, View} from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons'


export default class SignUp extends Component {


  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Sign Up</Text>
         
        
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