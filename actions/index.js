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
  GET_LIST_ADS_WITH_NEW_CATEGORY,
  COMPARE_OWN,
  TO_BE_COMPARE,
  FETCH_LIST_ITEM,
  CLICK_FILTER_AREA,
  CLICK_FILTER_CATEGORY,
  SHOW_LOADING,
  HIDE_LOADING,
  GET_LIST_ADS_ON_END_READ,
  GET_LIST_ADS_ON_REFRESH,
  POST_EVENT_CLICK,
  FETCH_LIST_ADS_RECOMMAND,
  FETCH_RECOMMAND_SUCCESS,
  FETCH_RECOMMAND_FAILED,
  FETCH_DETAIL_AD,
  FETCH_DETAIL_AD_SUCCESS,
  FETCH_DETAIL_AD_FAILED,
  LOAD_FONT_FAMILY
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

export const fetchListItem = ()=>{
    return {
        type: FETCH_LIST_ITEM
    }
}

export const fetchSuccessAcion = (receivelist_ads) =>{
    return{
        type:FETCH_SUCCEEDED,
        receivelist_ads
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
        item,
        adlist_id : item.adlist_id
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

export const clickFilterArea =(id_area) =>{
    return {
        type:CLICK_FILTER_AREA,
        id_area
    }
}

export const clickFilterCategory =(id_category) =>{
    return {
        type:CLICK_FILTER_CATEGORY,
        id_category
    }
}

export const showLoading = () =>{
    return{
        type: SHOW_LOADING
    }
}

export const hideLoading = () => {
    return {
        type: HIDE_LOADING
    }
}

export const getListAdsOnEndRead =() => {
    return {
        type: GET_LIST_ADS_ON_END_READ
    }
}

export const getListAdsOnRefresh = () => {
    return {
        type: GET_LIST_ADS_ON_REFRESH
    }
}

export const postLogEventClick =() =>  {
    return {
        type: POST_EVENT_CLICK
    }
}

export const getListAdsRecommand = () =>{
    return {
        type: FETCH_LIST_ADS_RECOMMAND,
        
    }
}

export const fetchRecommandSuccess = (receivelist_ads) =>{
    return {
        type:FETCH_RECOMMAND_SUCCESS,
        receivelist_ads:receivelist_ads
    }
}

export const fetchRecommandFailed = (receivelist_ads) =>{
    return {
        type:FETCH_RECOMMAND_FAILED,
        receivelist_ads:receivelist_ads
    }
}

export const getDetailAdAction = () => {
    return {
        type: FETCH_DETAIL_AD
    }
}

export const getDetailAdSuccess = (receive_ads) => {
    console.log("receive_ads was set")
    return {
        type:FETCH_DETAIL_AD_SUCCESS,
        receive_ads
    }
}

export const getDetailAdFailed = () => {
    return {
        type:FETCH_DETAIL_AD_FAILED,
    }
}

export const getFontFamily = (font) => {
    return {
        type: LOAD_FONT_FAMILY,
        font
    }
}

