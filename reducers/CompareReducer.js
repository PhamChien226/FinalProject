import {COMPARE_OWN,TO_BE_COMPARE} from '../actions/actionTypes';
let compareState={
    ownCompare:null,
    itemCompare:null
}

export  const compareReducers = (state=compareState,action) =>{
     switch (action.type) {
         case COMPARE_OWN:
             return {
               ...state,
               ownCompare:action.item
             };
         case TO_BE_COMPARE:
             return {
               ...state,
               itemCompare:action.item
             };
         default:
             return state;
     }
}

