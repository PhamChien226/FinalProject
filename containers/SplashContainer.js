import { AsyncStorage } from "react-native";
import { connect } from "react-redux";
import Splash from "../screens/Splash";

import { getDeviceIdSuccessAction } from "../actions/index";

const mapStateToProps = (state) => {
  return {
    authState: state.authState
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    async getDeviceId() {
      const value = await AsyncStorage.getItem("@fingerprint").catch(e =>
        console.log(e)
      );
      // console.log(`Value : ${value}`);
      if (value !== null) {
        dispatch(getDeviceIdSuccessAction(value));
      } else {
        // console.log("set Item")
      //   let randomString = require("random-string");
      // let uniqueId = randomString({ length: 20 });
        await AsyncStorage.setItem("@fingerprint", "61e42f0b-8b7c-4f9f-a5e0-2a2db94bfcdf");
        dispatch(getDeviceIdSuccessAction("61e42f0b-8b7c-4f9f-a5e0-2a2db94bfcdf")); 
      } 
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Splash);
