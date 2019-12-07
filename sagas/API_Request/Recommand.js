import {put,select} from 'redux-saga/effects'
// import { getListAdsRecommand } from "../../actions/index";

function* fetchListAdsRecommand (){
    // console.log("fetchListAdsRecommad is clled")
    const {fingerprint} = yield select(state => state.authState);
    // console.log(fingerprint)
    const response = yield fetch(`https://chotot-recommendersys.appspot.com/general-recommend?user_fingerprint=${fingerprint}`)
    const listAds = yield response.json();
    // console.log("Recommand Saga");
    // console.log(listAds.ads)
    return listAds.ads;
}

export  {
    fetchListAdsRecommand
}