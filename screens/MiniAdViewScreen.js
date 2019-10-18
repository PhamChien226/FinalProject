import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  ScrollView,
  Dimensions,FlatList,
  ActivityIndicator
} from "react-native";
import InfoAddComponent from "../component/AddViewComponent/InfoAddComponent";
import InfoMechantComponent from "../component/AddViewComponent/InfoMechantComponent";
import LocationMerchant from "../component/AddViewComponent/LocationMerchant";
import ProductsListInterest from "../component/ListProduct/ProductsListInterest";
import InfoDetailAd from '../component/AddViewComponent/InfoDetailAd'
import ImageComponent from '../component/AddViewComponent/ImageComponent'

let adlist_id = null;
let {width,height} = Dimensions.get('window')
export default  class MiniAdViewScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad_view: {},
      isLoading: true,
      isTabDetails:false 
    };
    
  }

  componentDidMount = () => {
    this.callAPI();
  };

  callAPI = async () => {
    try {
      const response = await fetch(
        `https://chotot-recommendersys.appspot.com/infor?adlist_id=1`,
        // `https://chotot-recommendersys.appspot.com/infor?adlist_id=${adlist_id}`,
        {
          method: "GET",
          dataType: 'json',
          headers: {
            "Content-Type": "application/json"
          },
        }
      );
      const dataJson = await response.json();
      this.setState({
        ad_view : dataJson.infor,
        isLoading: false
      });
    } catch (error) {}
  };

  addLogin = () => {
    this.refs.loginModal.showLoginModal();
  };

  render() {
    const {
      ad_view: {
        price_str,
        publisher,
        subject,
        seller_type,
        create_elapse,
        parameters,
        content
      },  
      ad_view,
      isLoading,isTabDetails 
    } = this.state;

    // adlist_id = this.props.navigation.getParam("adlist_id"); 
    if (isLoading)
      return <ActivityIndicator size={"large"} animating={isLoading} />;
    else
      return (
        <View style={styles.container}>
          <ScrollView style={styles.viewContainer}>
            <ImageComponent height={50} />
            <Iamge />
            <InfoAddComponent
              date={create_elapse}
              subject={subject}
              price_string={price_str}
              transparent={this}
              addLogin={this.addLogin}
            />
            <View style={styles.tabContenAd}>
              <TouchableOpacity
                style={{
                  flex: 0.45,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({ isTabDetails: false });
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    paddingBottom: 5,
                    borderBottomColor: isTabDetails ? "white" : "#ffab00",
                    color: isTabDetails ? "black" : "#ffab00",
                    borderColor: "white",
                    borderWidth: 1
                  }}
                >
                  Rao Bán
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  flex: 0.45,
                  justifyContent: "center",
                  alignItems: "center"
                }}
                onPress={() => {
                  this.setState({ isTabDetails: true });
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    width: "100%",
                    paddingBottom: 5,
                    borderBottomColor: isTabDetails ? "#ffab00" : "white",
                    color: isTabDetails ? "#ffab00" : "black",
                    borderColor: "white",
                    borderWidth: 1
                  }}
                >
                  Thông Tin Chi Tiết
                </Text>
              </TouchableOpacity>
            </View>
             {isTabDetails ? (
              <InfoDetailAd parameters={parameters} />
            ) : (
              <View style={styles.textBodyAddWrapper}>
                <Text style={styles.textBodyAdd}>{content}</Text>
              </View>
            )}
            {/* <LocationMerchant /> */}
            {/* <ProductsListInterest style={styles.productInterest} /> */}
          </ScrollView>
        </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 50
  },
  viewContainer: {
    backgroundColor: "white"
  },
  headerContainer: {
    position: "absolute",
    top: 35,
    left: 0,
    right: 0,
    height: 40,
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 10,
    alignItems: "center"
  },
  rightHeaderWrapper: {
    flexDirection: "row"
  },
  buttonGoback: {
    height: 35,
    width: 35,
    paddingLeft: 8
  },
  buttonLikeWrapper: {
    height: 40,
    width: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 10
  },
  backgroundIconHeart: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "#c4c4c4",
    borderRadius: 18,
    opacity: 0.4
  },
  tabContenAd:{
    flexDirection:"row",
    justifyContent:'center',
    alignItems:'center',
    backgroundColor:"white",
    borderWidth:5,
    borderColor:"white",
    borderBottomColor:'#F8F9FD'
  },
  buttonTabContentAd:{
    
    // backgroundColor:'lightgreen'
  },
  textTabContentAd:{
    textAlign:'center',
    width:'100%',
    paddingBottom:5,
  },

  textBodyAddWrapper: {
    padding: 10,
  },
  textBodyAdd: {
    fontSize:15,
    fontWeight:'400'
  },
  buttonContactWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: 60
  },
  buttonContact: {
    flex: 33.33,
    backgroundColor: "mediumseagreen",
    justifyContent: "center",
    alignItems: "center"
  },
  // infoConfigWrapper: {
  //   padding: 10
  // },
  // AConfig: {
  //   flexDirection: "row",
  //   alignItems: "center",
  //   padding: 10
  // },
  productInterest: {},
  mobile_icon: {
    width: 22,
    height: 22,
    paddingRight: 10
  },AConfig_1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F6F8F8",
    height: 39
  },
  AConfig_2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    height: 39
  },
  titleConfig: {
    flex: 0.6
  },
  contentConfig: {
    flex: 0.4
  }
});

