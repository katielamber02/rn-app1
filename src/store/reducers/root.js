import {ADD_PLACE,DELETE_PLACE,SELECT_PLACE,DESELECT_PLACE} from '../actions/actionTypes'

const initialState={
    places:[]
}
const reducer=(state=initialState,action)=>{
   switch(action.type){
       case ADD_PLACE:
        return{
            ...state,
            places:state.places.concat({
                key:Math.random(),
                name:action.placeName,
                image:{
                    uri:"https://www.usmagazine.com/wp-content/uploads/2018/06/Smoothie-the-Cat-Instagram-zoom.jpg"
                }
            })
        }
      
       default:
       return state
   }
}
export default reducer