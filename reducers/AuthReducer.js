import { APP_LOADED,LOGGOUT,LOGIN_SUCCESS,GET_DEVICE_ID_SUCCESS,CHECK_IS_USED } from "../actions/actionTypes";

let authState = {
  app_stated: false,
  authenticated: false,
  isLoading: true,
  fingerprint: "",
//   isUsed:false
};


export  const authStateReducer = (state=authState,action)=>{
    // console.log(payload.fingerprint)
    switch (action.type) {
        case LOGIN_SUCCESS:
            return {...state,authenticated:true} 
        case LOGGOUT:
            return {...state,authenticated:false}
        case APP_LOADED:
            return {...state,app_stated:true}
        case GET_DEVICE_ID_SUCCESS:
            return {
              ...state,
              isLoading: false,
              fingerprint: action.fingerprint
            };
        // case CHECK_IS_USED:
        //     return {
        //       ...state,
        //       isUsed: action.isUsed,
        //     };
        default:
            return state;
    }
}