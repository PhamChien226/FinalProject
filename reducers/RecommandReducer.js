import {GET_LIST_ADS_RECOMMAND, FETCH_RECOMMAND_SUCCESS, FETCH_RECOMMAND_FAILED} from "../actions/actionTypes"
 
let recommandState ={
    list_ads_interest:[],
    isLoading:true,

};

export const recommandReducers = (state=recommandState,action) => {
    switch (action.type) {
        case FETCH_RECOMMAND_SUCCESS:
            return {
                ...state,
                list_ads_interest:action.receivelist_ads,
                isLoading:false
            }
        case FETCH_RECOMMAND_FAILED:
            return {
                ...state,
                list_ads_interest: [],
                isLoading:false
            }
        default:
            return state;
    }
}

