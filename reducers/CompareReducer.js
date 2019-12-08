import {COMPARE_OWN,TO_BE_COMPARE} from '../actions/actionTypes';
let compareState={
    ownCompare:null,
    itemCompare:null,
    imageOfOwnItem:null,
    imageOfToBeItem:null
}

export  const compareReducers = (state=compareState,action) =>{
     switch (action.type) {
         case COMPARE_OWN:
             return {
               ...state,
               ownCompare:action.item,
               imageOfOwnItem:action.imageOfOwnItem
             };
         case TO_BE_COMPARE:
           console.log("compare Reducer");
           console.log(action.item)
           console.log(action.imageOfToBeItem)
             return {
               ...state,
               itemCompare:action.item,
               imageOfToBeItem:action.imageOfToBeItem
             };
         default:
             return state;
     }
}

