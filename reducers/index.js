import {combineReducers} from 'redux'

import {authStateReducer} from './AuthReducer'
import {infoUserReducers} from './InfoUserReducers'
import {adReducer} from './AdReducer'
import {compareReducers} from './CompareReducer'

export const allreducers = combineReducers({
    authState: authStateReducer,
    userState: infoUserReducers,
    adState:adReducer,
    compareState :compareReducers
})