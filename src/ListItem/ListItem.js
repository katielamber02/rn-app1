import React from 'react'
import {View,Text,StyleSheet,TouchableWithoutFeedback,Image,TouchableOpacity} from "react-native"
import placeImage from '../assets/11.jpg'
import Icon from 'react-native-vector-icons/Ionicons'

export default function ListItem(props) {
  return (
      <TouchableWithoutFeedback >
       
        <View style={styles.listItem}>
          <Image source={placeImage} style={styles.placeImage}/>
          <Text>{props.placeValue}</Text>
          <TouchableOpacity onPress={props.onItemPressed}>
            <View style={styles.icon}>
              <Icon
                  size={40}
                  name="ios-trash" 
                  color="darkgreen"
                  
                   />
           </View>
          </TouchableOpacity> 
       </View>
        
      </TouchableWithoutFeedback>
    
  )
}
const styles=StyleSheet.create({
    icon:{
      //flexDirection:"flex-end"
      
    },
    listItem:{
        
        width:"100%",
        padding:10,
        backgroundColor:"#eee",
        margin:5,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"

    },
    placeImage:{
      marginRight:8,
      height:40,
      width:40
    }
})
