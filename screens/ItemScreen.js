import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  ScrollView,
  Dimensions,FlatList,Image
} from "react-native";

import {
  ContactComponent,
  ImageComponent,
  InfoAddComponent,
  InfoDetailAd,
  InfoMechantComponent,
  LocationMerchant,
  InfoDetailAdLapTop
} from "../component/AddViewComponent";

import ProductsListInterest from "../component/ListProduct/ProductsListInterest";
import LoginScreen from "../screens/LoginScreen";

import InfoAddContainer from '../containers/InfoAddContainer'

import { withNavigation } from "react-navigation"; 

let adlist_id = null;
let {width,height} = Dimensions.get('window')
class ItemScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ad_view: {},
      isLoading: true,
      isTabDetails:false ,
      islogin:false

    };
    
  }

  componentDidMount = () => {
    this.callAPI();
  };

  callAPI = async () => {
    try {
      const response = await fetch(
        `https://chotot-recommendersys.appspot.com/infor?adlist_id=${adlist_id}`,
        {
          method: "GET",
          dataType: 'json',
          headers: {
            // Accept: "application/json",
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
        content,
        category_name
      },  
      ad_view,
      isLoading,isTabDetails 
    } = this.state;

    adlist_id = this.props.navigation.getParam("adlist_id");

    if (isLoading)
      return <ActivityIndicator size={"large"} animating={isLoading} />;
    else
      return (
        <View style={styles.container}>
          <ScrollView style={styles.viewContainer}>
            <ImageComponent
              addLogin={this.addLogin}
              // style={{height:height*0.45}}
              height={height * 0.45}
              category_name={category_name}
            />
            <InfoAddContainer
              ad_view={ad_view}
              date={create_elapse}
              subject={subject}
              price_string={price_str}
              transparent={this}
              addLogin={this.addLogin}
              item={ad_view}
            />
            <InfoMechantComponent
              avatar={publisher.avatar}
              account_name={publisher.name}
            />
            <View style={styles.tabContenAd}>
              <View
                style={{
                  width: width * 0.5,
                  alignItems: "center",
                  borderBottomColor: isTabDetails ? "white" : "#FFBA00",
                  borderColor: "white",
                  borderWidth: 3
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ isTabDetails: false });
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      width: "100%",
                      paddingBottom: 5,
                      color: isTabDetails ? "black" : "#FFBA00",
                      fontWeight: "bold"
                    }}
                  >
                    Rao Bán
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  width: width * 0.5,
                  alignItems: "center",
                  borderBottomColor: isTabDetails ? "#FFBA00" : "white",
                  borderColor: "white",
                  borderWidth: 3
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    this.setState({ isTabDetails: true });
                  }}
                >
                  <Text
                    style={{
                      textAlign: "center",
                      width: "100%",
                      paddingBottom: 5,
                      color: isTabDetails ? "#FFBA00" : "black",
                      fontWeight: "bold"
                    }}
                  >
                    Thông Tin Chi Tiết
                  </Text>
                </TouchableOpacity>
              </View>
            </View>

            {isTabDetails ? (
              <View>
                {category_name === "Laptop" ? (
                  <InfoDetailAdLapTop parameters={parameters} />
                  ) : (
                    <InfoDetailAd parameters={parameters} />
                )}
                {/* <InfoDetailAd parameters={parameters} /> */}
                <ProductsListInterest style={styles.productInterest} />
              </View>
            ) : (
              <View>
                <View style={styles.textBodyAddWrapper}>
                  <Text style={styles.textBodyAdd}>{content}</Text>
                </View>
                <LocationMerchant />
                <View style={styles.verifiedWapper}>
                  <Image
                    source={require("../assets/shield-iconx4.png")}
                    style={styles.imageVerified}
                    resizeMode="contain"
                  ></Image>
                  <Text style={styles.textVerified}>
                    Tin đăng này đã được kiểm duyệt. Nếu gặp vấn đề, vui lòng
                    báo cáo tin đăng hoặc liên hệ CSKH để được trợ giúp.
                  </Text>
                </View>
              </View>
            )}
          </ScrollView>
          <ContactComponent publisher={publisher} />
          <LoginScreen ref={"loginModal"} transparent={this} />
        </View>
      );
  }
}
ItemScreen.navigationOptions = {
  header: null
};
export default withNavigation(ItemScreen);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 70
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
    width:width,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:5,
    borderColor:"white",
    borderBottomColor:'#F8F9FD',
  },

  textBodyAddWrapper: {
    padding: 10,
  },
  textBodyAdd: {
    fontSize:15,
    fontWeight:'400'
  },
  verifiedWapper:{
    paddingTop:5,
    flexDirection:'row',
    // justifyContent:'space-around'
  },
  imageVerified:{
    flex:0.2,
    height:55,
    width:40,
  },
  textVerified:{
  flex:0.75
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

