import { combineReducers } from "redux";

import { authStateReducer } from "./AuthReducer";
import { infoUserReducers } from "./InfoUserReducers";
import { adReducer } from "./AdReducer";
import { compareReducers } from "./CompareReducer";
import { recommandReducers } from "./RecommandReducer";
import { adViewReducers } from "./AdViewReducer";
import { dashBoardReducer } from "./AppReducer";

export const allreducers = combineReducers({
  authState: authStateReducer,
  userState: infoUserReducers,
  adState: adReducer,
  compareState: compareReducers,
  recommandState: recommandReducers,
  adViewState: adViewReducers,
  dashBoardState: dashBoardReducer,

});
