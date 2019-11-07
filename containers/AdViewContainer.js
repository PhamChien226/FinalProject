import { connect } from "react-redux";
import { getDetailAdAction, getFontFamily } from "../actions/index";

import ItemScreen from "../screens/ItemScreen";

const mapStateToProps = state => {
  return {
      adViewState: state.adViewState
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getInforDetailAd: async () => {
      await dispatch(getDetailAdAction());
    },

    loadFont: async () => {
     const SF_FONT_PRO = await Font.loadAsync({
        'sf-font-pro': require('../assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf'),
      });
      console.log("Load font");
      console.log(SF_FONT_PRO);
      console.log('sf-font-pro');
      dispatch(getFontFamily(SF_FONT_PRO));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ItemScreen);
