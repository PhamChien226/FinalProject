import {
  CLICK_ADD,
  FETCH_DETAIL_AD,
  FETCH_DETAIL_AD_SUCCESS,
  FETCH_DETAIL_AD_FAILED,
  LOAD_FONT_FAMILY
} from "../actions/actionTypes";

let adViewState = {
    adlist_id: null,
    adViewCurrent: [],
    isLoading: true,
    fontSF: null
}

export const adViewReducers = (state=adViewState,action) => {
    switch (action.type) {
        case CLICK_ADD:
            return {
                ...state,
                // listAdIdCurrent: aciton.item,
                adlist_id: action.adlist_id,
                isLoading:true,
            }
        case FETCH_DETAIL_AD_SUCCESS: 
            return {
                ...state,
                adViewCurrent:action.receive_ads,
                isLoading:false
            }
        case FETCH_DETAIL_AD_FAILED:
            return {
                ...state,
                adViewCurrent:[],
                isLoading:false
            }
        case LOAD_FONT_FAMILY:
            return {
                ...state,
                fontSF : action.font
            }
    
        default:
            return state;
    }
}