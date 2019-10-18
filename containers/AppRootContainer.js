import {AsyncStorage} from 'react-native'
import AppRoot from '../components/AppRoot';
import {loginSuccessAction,appLoadedAction,getRegionUser} from '../actions/index'

import { connect } from "react-redux";


const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      async checkLogin(){
        const isLoggin = await AsyncStorage.getItem('authenticated').catch(e=>console.log(e))
        if(isLoggin){
          dispatch(loginSuccessAction())
        }
        else {
          setTimeout(() => {
            dispatch(appLoadedAction())
          }, 3000);
        }
      },
      async checkIsUsed(){
        const isUsed = await AsyncStorage.getItem('@isUsed').catch(e=>console.log(e))
        const region = await AsyncStorage.getItem('@region').catch(e=>console.log(e))
        if(isUsed !== null){
          //set isUsed là true
          dispatch(getRegionUser(region))
        }
      }
    }
  };
  
  const mapStateToProps = (state,ownProps) =>{
    return {
      authState:state.authState,
      userState:state.userState
    }
  }
  
  export default connect(mapStateToProps,mapDispatchToProps)(AppRoot)