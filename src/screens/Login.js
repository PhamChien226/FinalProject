// import React, { Component } from 'react'
// import { Text, StyleSheet, View,Button,AsyncStorage } from 'react-native';
// import {connect} from 'react-redux'

// class LoginScreen extends Component {   
//     constructor(props) {
//         super(props)
//         this.attemptLogin = this.attemptLogin.bind(this)
//     }

//     attemptLogin () {
//         //DO VALIDATION & SERVER REQUEST

//         //all good get token and go to user dashboard ?
//         var token = "sometokenregex"
//         this.props.authSuccess(token);
//     }
     


//     render() {
//         return (
//             <View style={{flex:1,backgroundColor:"#ffffff", alignItems:'center',justifyContent:"center"}}>
//                 <Text children="Redux Login Example" style={{color:'black'}}/>
//                 <Text children="Click on Login to Continue" color="red"/>
//                 <Button color="#091000" title="login" onPress={this.attemptLogin}/>
//             </View>
//         )
//     }
// }

// const mapStateToProps = (state,ownProps) =>{
//     return {}
// }

// // export const actionCreator = (type,payload=null) =>({type,payload})

// const mapDispatchToProps = (dispatch,ownProps) =>{
//     return {
//         authSuccess:(token)=>{
//             AsyncStorage.multiSet([['token',token],['authenticated','1']])
//             dispatch(actionCreator('LOGIN_SUCCESS'))
//         }
//     }
// }

// // export const authStateReducer = (state={app_stated:false,authenticated:false,isLoading:true,fingerprint:''},{type,payload})=>{
// //     // console.log(payload.fingerprint)
// //     switch (type) {
// //         case 'LOGIN_SUCCESS':
// //             return {...state,authenticated:true} 
// //         case 'LOGGOUT':
// //             return {...state,authenticated:false}
// //         case 'APP_LOADED':
// //             return {...state,app_stated:true}
// //         case 'APP_LOADED':
// //             return {...state,app_stated:true}
// //         case 'GET_DEVICE_ID_SUCCESS':
// //             return {
// //               ...state,
// //               isLoading: false,
// //             //   fingerprint: payload.fingerprint
// //             };
    
// //         default:
// //             return state;
// //     }
// // }

// export default connect(mapStateToProps,mapDispatchToProps)(LoginScreen)


