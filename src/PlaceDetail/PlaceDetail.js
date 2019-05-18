import React from 'react'
import {Modal,View,Text,Image,Button} from 'react-native'

const placeDetail=props=>(
    <Modal>
        <View>
            <Image source={props.source}/>
            <Text>{props.placeName}</Text>
            <View>
                <Button/>
                <Button/>
            </View>
        </View>
    </Modal>
)
export default placeDetail