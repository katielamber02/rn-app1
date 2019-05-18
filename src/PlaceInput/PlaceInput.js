import React from 'react'
import {TextInput} from 'react-native'

export default function PlaceInput(props) {
  return (
    <TextInput 
    style={{width:"90%",borderColor:"black",borderWidth:1,fontSize: 20,textAlign: 'center'}}
    placeholder="type here"
    value={props.placeName}
    onChangeText={props.placeNameChangeHandler}
    />
  )
}
