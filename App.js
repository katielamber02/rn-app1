import React, {Component} from 'react'
import { StyleSheet, Text, View,Button,TouchableOpacity} from 'react-native'
import PlaceInput from './src/PlaceInput/PlaceInput';
import PlaceList from './src/PlaceList/PlaceList';
import Icon from 'react-native-vector-icons/Ionicons'


export default class App extends Component {
  state={
    placeName:"",
    places:[]
  }
  placeNameChangeHandler=val=>{
   this.setState({placeName:val})
  }
  placeAddedHandler = (placeName)=> {
    console.log("some text from console")
    if(this.state.placeName.trim()==="") return
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  
  }
  removeItemHandler=index=>{
    this.setState(prevState=>{
      return{
        places:prevState.places.filter((place,i)=>i!==index)
      }
    })
  }

  render() {
    
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        
        <View style={styles.inputContainer}>
        <PlaceInput 
          placeName={this.state.placeName}
          placeNameChangeHandler={this.placeNameChangeHandler}
          />
        <Button title="Add" onPress={this.placeAddedHandler}/>
        </View>
        <PlaceList 
             places={this.state.places}
             onItemSelected={this.removeItemHandler}/>
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
