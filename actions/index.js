import {
  LOGIN_SUCCESS,
  APP_LOADED,
  GET_DEVICE_ID_SUCCESS,
  LOGGOUT,
  SELECT_REGION,
  CHECK_IS_USED,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  CLICK_ADD,
  CLICK_REFRESH,
  COMPARE_OWN,
  TO_BE_COMPARE
} from "./actionTypes";

//Action "increment counter"
export const loginSuccessAction = () =>{
    return{
        type:LOGIN_SUCCESS,
    }
}
//Action "decrement counter"
export const logoutSuccessAction = () =>{
    return{
        type:LOGGOUT,
    }
}
export const appLoadedAction = () =>{
    return{
        type:APP_LOADED,
    }
}
export const getDeviceIdSuccessAction = (fingerprint) =>{
    return{
        type:GET_DEVICE_ID_SUCCESS,
        fingerprint: fingerprint 
    }
}
export const getRegionUser = (region) =>{
    return{
        type:SELECT_REGION,
         region 
    }
}
export const checkIsUsed = (used) =>{
    return{
        type:CHECK_IS_USED,
        used 
    }
}
export const fetchSuccessAcion = (page,id_main_category,id_category,id_area) =>{
    return{
        type:FETCH_SUCCEEDED,
        page,
        id_main_category,
        id_category,
        id_area,
        list_ads 
    }
}
export const fetchfailedAcion = () =>{
    return{
        type:FETCH_FAILED,
    }
}

export const clickAd = (item) =>{
    return{
        type:CLICK_ADD,
        item
    }
}

export const clickRefresh = (id_main_category,page,id_category,id_area) =>{
    return{
        type:CLICK_REFRESH,
        id_main_category:id_main_category,
        page:page,
        id_category:id_category,
        id_area:id_area
    }
}

export const getAdItemOwnCompare = (item) =>{
    return{
        type:COMPARE_OWN,
        item:item
    }
}

export const getAdItemToBeCompare = (item) =>{
    return{
        type:TO_BE_COMPARE,
        item:item
    }
}