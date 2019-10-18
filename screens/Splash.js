import React, { Component } from 'react'
import { Text, StyleSheet, View,ActivityIndicator,AsyncStorage,Image } from 'react-native';
// import {  actionCreator} from "../../actions/AuthAction";
import { getDeviceIdSuccessAction } from "../actions/index";
import {connect} from 'react-redux'

 export default class Splash extends Component {
    constructor(props) {
        super(props)
    
    }

    componentDidMount() {
      setTimeout(() => {
        
        this.props.getDeviceId()
      }, 3000);
    }
    

    render() {
        return (
          <View style={styles.container}>
            <Image
              source={require("../assets/transparent_logo.png")}
              style={styles.logo}
              resizeMode="contain"
            />
          </View>
        );
    }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:'#ffba00'
},
logo:{
    width:200,
    height:200,
}
})

// const mapDispatchToProps = (dispatch, ownProps) => {
//     return {
//       async getDeviceId(){
//         const value = await AsyncStorage.getItem('@token').catch(e=>console.log(e))
//         console.log(`Value : ${value}`)
//         if(value !== null){
//           dispatch(getDeviceIdSuccessAction(value))
//           // dispatch(actionCreator('GET_DEVICE_ID_SUCCESS'))
//         }
//         else {
//         //   setTimeout(async () => {
        
//               await AsyncStorage.setItem('@token',"yeahyeah")
//                dispatch(getDeviceIdSuccessAction("yeahyeah"));
//         //   }, 3000);
//         } 
//       }
//     }
//   };
  
//   const mapStateToProps = (state,ownProps) =>{
//     return {
//       authState:state.authState
//     }
//   }
  
  // export default connect(mapStateToProps,mapDispatchToProps)(Splash)
