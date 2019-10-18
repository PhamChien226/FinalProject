import {SELECT_REGION} from '../actions/actionTypes';
let userState={
    region:'',
    isUsed:false
}

export  const infoUserReducers = (state=userState,action) =>{
     switch (action.type) {
         case SELECT_REGION:
             return {
               ...state,
               region: action.region,
               isUsed:true
             };
         default:
             return state;
     }

}