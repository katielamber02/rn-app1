import React from 'react'
import { StyleSheet, ScrollView} from 'react-native'
import ListItem from "../ListItem/ListItem"

export default function PlaceList(props) {
    const placesOutput=props.places.map((place,idx)=>(
        <ListItem
            key={idx} 
            placeValue={place}
            onItemPressed={()=>props.onItemSelected(idx)}
          
            />
      ))
  return (
    <ScrollView style={styles.listContainer}>{placesOutput}</ScrollView>
  )
  }
const styles = StyleSheet.create({
  
    listContainer:{
      width:"100%"
    }
  
  })
