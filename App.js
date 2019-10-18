import React, { Component } from 'react'
// import AppRoot from './AppRoot';
import AppRootContainer from './containers/AppRootContainer' 
import {Provider} from 'react-redux';
import { combineReducers , createStore,applyMiddleware} from 'redux'
import { allreducers } from './reducers/index';

// import  CounterContainer from "./containers/CounterContainer";

// import allReducers from "./reducers"; 
//ReduxSaga
// import createSagaMiddleware from 'redux-saga';
//Middleware

// const sagaMiddleware = createSagaMiddleware();
// import rootSaga from './sagas/rootSaga';



// const reducers = combineReducers({
//   authState: authStateReducer
// })
  // let store = createStore(allReducers,applyMiddleware(sagaMiddleware))
let store = createStore(allreducers)
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        {/* <CounterContainer /> */}
        <AppRootContainer/>
      </Provider>
    );
  }
}
// sagaMiddleware.run(rootSaga)



// import React from "react";
// import { View, StyleSheet, Image, Dimensions } from "react-native";
// import AppContainer from "./navigation/MainTabNavigator";
// import SplashScreen from "./screens/SplashScreen";

// let { width, height } = Dimensions.get("window");
// export default class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isloading: false,
//       deviceId: ""
//     };
//   }

//   componentWillMount = () => {
//     // console.log('Star Call API')
//     this.setState({
//       isloading: true
//     });
//   };

//   componentDidMount = async () => {
//     // console.log(' start Call API ')
//     await this.getDeviceId();
//     await this.postLogin();
//     await this.setState({ isloading: false });
//     // this.callAPI();
//     // this.setState({
//     //   isloading :false
//     // }, ()=>setTimeout(() => {

//     // }, 3000))
//   };

//   callAPI = () => {
//     // console.log("Call API")
//     setTimeout(() => {
//       this.setState({ isloading: false });
//     }, 3000);
//   };
//   getDeviceId = async () => {
//     try {
//       const value = await AsyncStorage.getItem("@fingerPrint");
//       // console.log("value: " + value);
//       if (value !== null) {
//         // We have data!!
//         this.setState({
//           deviceId: value
//         });
//       } else {
//         this._storeData();
//       }
//     } catch (error) {
//       // Error retrieving data
//     }
//   };
//   _storeData = async () => {
//     var randomString = require("random-string");
//     var uniqueId = randomString({ length: 20 });
//     console.log("set unique id");
//     try {
//       await AsyncStorage.setItem("@fingerPrint", uniqueId);
//       setTimeout(() => {
//         this.setState({
//           // isloading: false,
//           deviceId: uniqueId
//         });
//       });
//       //   this.setState()
//     } catch (error) {
//       // Error saving data
//     }
//   };

//   postLogin = async () => {
//     const { deviceId } = this.state;
//     const respond = await fetch(
//       "https://chotot-recommendersys.appspot.com/logging/create",
//       {
//         method: "POST",
//         headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           adlist_id: 1,
//           ad_placement: "top",
//           ad_position: 2,
//           ad_source: "stickyad",
//           user_fingerprint: `${deviceId}`,
//           event_client_time: "2019-09-26T22:30:12",
//           event_server_time: "2019-09-26T22:31:00",
//           page_name: "ADLISTING",
//           page_number: 1,
//           page_device: "HANDY",
//           filter_brand: null,
//           filter_main_category_id: null,
//           filter_category_id: null,
//           filter_keyword: null,
//           filter_price: "1200000-3000000",
//           filter_region_id: 13000,
//           filter_area_id: null,
//           filter_adtype: null
//         })
//       }
//     );
//     console.log(respond);
//   };

//   render() {
//     // console.log('render')
//     // console.log(this.state.isloading)
//     if (this.state.isloading === true) {
//       // console.log("SplashScreen run");
//       return <SplashScreen />;
//     } else {
//       // console.log("HomeScreen run");
//       return (
//         <View style={styles.container}>
//           <AppContainer />
//         </View>
//       );
//     }
//   }
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     paddingTop: 24,
//     backgroundColor: "#ffba00"
//   },
//   header: {
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#ffba00"
//   },
//   headerWrapper: {
//     flexDirection: "row",
//     height: 35,
//     width: width * 0.9,
//     borderBottomColor: "gray",
//     borderBottomWidth: 1
//   },
//   textInput: {
//     fontSize: 20,
//     height: 40,
//     width: "80%",
//     paddingLeft: 10
//   },
//   icon: {
//     marginTop: 6,
//     padding: 5
//   }
// });
 