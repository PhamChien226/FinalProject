import {put,select} from 'redux-saga/effects'
// import { getListAdsRecommand } from "../../actions/index";
import ListProductsInterest from '../../utils/ListProductsInterest'

function* fetchListAdsRecommand (){
    // const {fingerprint} = yield select(state => state.authState);
    // const response = yield fetch(`https://chotot-recommendersys.appspot.com/general-recommend?user_fingerprint=${fingerprint}`)
    // const listAds = yield response.json();
    // return listAds.ads;
    return ListProductsInterest;
}

export  {
    fetchListAdsRecommand
}