import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'




export default class SignIn extends Component {


    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>Some text from Sign In</Text>
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