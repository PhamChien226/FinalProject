import { AsyncStorage } from 'react-native'
import { connect } from "react-redux";
import {getRegionUser} from '../actions/index';
import LocationScreen from '../screens/LocationScreen'


const mapStateToProps = state => {
  return{
    userState: state.userState
  }
};

const mapDispatchToProps = dispatch => {
  return {
     getRegion: async(region) => {
      await AsyncStorage.setItem('@isUsed','1');
      await AsyncStorage.setItem('@region',region);
      dispatch(getRegionUser(region))
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LocationScreen);
