import React, {Component} from 'react'
import { StyleSheet, Text, View,Button} from 'react-native'

import {Navigation} from 'react-native-navigation'


export default class Auth extends Component {
  goToScreen = screenName => {
    Navigation.push(this.props.componentId, {
      component: {
        name: screenName
      }
    })
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Button title="Sign In" onPress={() => this.goToScreen('rnapp1.SignIn')} />
        <Button title="Sign Out" onPress={() => this.goToScreen('rnapp1.SignIn')} />
        <Button title="App" onPress={() => this.goToScreen('rnapp1.App')} />

      </View>
    )
  }
}
  

  


const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 30


  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color: 'green'
  },
  inputContainer: {
    //flex:1,
    flexDirection: "row",
    justifyContent: "space-between"
  }

})