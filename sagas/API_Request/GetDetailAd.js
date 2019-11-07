import { put, select } from "redux-saga/effects";
import infoDetailAd from '../../utils/infoDetailAd'

export function* getDetailAd() {
  //them state
  // const { adlist_id } = yield select(state => state.adViewState);
  
  // const response = yield fetch(
  //   `https://chotot-recommendersys.appspot.com/infor?adlist_id=${adlist_id}`
  //   );
  //   const detail_ad = yield response.json();
  //   console.log("get Detial Ad saga")
  //   console.log(detail_ad.infor)

  // return detail_ad.infor;
  return infoDetailAd.infor; 
}
