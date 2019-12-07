import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  FlatList,
  SafeAreaView,
  StatusBar
} from "react-native";
import Text from '../components/CustomText';
import AdContainer from "../containers/AdContainer";
import listProductsInterest from "../utils/ListProductsInterest";
import ButtonGoback from '../components/ButtonGoBack';

let { width, height } = Dimensions.get("window");
export default class CompareScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props);

    this.state = {
      isSelectRecommand: false
    };
  }

  render() {
    const { isSelectRecommand } = this.state;
    const { list_ad_interest } = this.props.adState;
    return (
      <View style={styles.container}>
      <StatusBar  barStyle="dark-content"/>
        <View style={styles.header}>
          <ButtonGoback  style={styles.buttonGoback} onPress={() => {this.props.navigation.goBack();}} />
          <Text style={styles.title}>So sánh</Text>
        </View>

        <View style={styles.tabContenAd}>
          <TouchableOpacity
            style={{
              width: width * 0.5,
              alignItems: "center",
              borderBottomColor: isSelectRecommand ? "white" : "#ffab00",
              borderColor: "white",
              borderWidth: 3
            }}
            onPress={() => {
              this.setState({ isSelectRecommand: false });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                width: "100%",
                paddingBottom: 5,
                color: isSelectRecommand ? "black" : "#ffab00",
                fontWeight: isSelectRecommand ? "400" : "bold",
              }}
            >
              Đã xem
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              width: width * 0.5,
              alignItems: "center",
              borderBottomColor: isSelectRecommand ? "#ffab00" : "white",
              borderColor: "white",
              borderWidth: 3
            }}
            onPress={() => {
              this.setState({ isSelectRecommand: true });
            }}
          >
            <Text
              style={{
                textAlign: "center",
                width: "100%",
                paddingBottom: 5,
                color: isSelectRecommand ? "#ffab00" : "black",
                // fontWeight: "bold"
                fontWeight: isSelectRecommand ? "bold" : "400",
              }}
            >
              Gợi ý cho bạn
            </Text>
          </TouchableOpacity>
        </View>

        {isSelectRecommand ? (
          <FlatList
            data={listProductsInterest}
            style={{ backgroundColor: "white", paddingBottom: 30 }}
            renderItem={({ item, index }) => {
              return (
                <AdContainer
                  item={item}
                  index={index}
                  transparent={this}
                  key={index}
                  index={index}
                ></AdContainer>
              );
            }}
            keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
          ></FlatList>
        ) : (
          <FlatList
            data={list_ad_interest}
            style={{ backgroundColor: "white", paddingBottom: 30 }}
            renderItem={({ item, index }) => {
              return (
                <AdContainer
                  item={item}
                  index={index}
                  transparent={this}
                  //set la key nhe
                  key={index}
                  index={index}
                ></AdContainer>
              );
            }}
            keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
          ></FlatList>
        )}
      </View>
      // {/* </StatusBar > */}
    );
  }
}

const styles = StyleSheet.create({
  safeArea:{
    backgroundColor:'#ffba00',
    color:'#ffba00'
  },
  container: {
    flex: 1,
    color: "#fff"
  },
  header: {
    flexDirection: "row",
    alignItems:'center',
    width: width,
    // backgroundColor: "#ffab00", 
    backgroundColor: "white", 
    marginTop:30,
    paddingLeft: 10,
    // paddingTop: 35,
    paddingTop: 5,
    paddingBottom: 10,
  },
  buttonGoback:{

  },
  title: {
    alignSelf: 'center',
    paddingLeft: 25,
    fontSize: 17,
    fontWeight: "bold"
  },
  
  tabListAds: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: "#ffab00"
  },
  tabContenAd: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    borderWidth: 5,
    borderColor: "white",
    borderBottomColor: "#F8F9FD"
  },
  // textHeader: {
  //   fontWeight: "bold",
  //   fontSize: 18
  // },
  containerItem: {
    flexDirection: "row",
    height: 120,
    width: width * 0.95,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 5,
    marginHorizontal: 5,
    borderBottomColor: "#c4c4c4",
    borderWidth: 1,
    borderColor: "white"
  },
  button: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    width: "95%",
    height: "95%"
  },
  image: {
    flex: 0.3,
    height: 110,
    backgroundColor: "#c4c4c4"
  },
  infoAdd: {
    flex: 0.65,
    height: 110,
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "flex-start"
  },
  infoExtraWrapper: {
    flexDirection: "row",
    width: 220,
    justifyContent: "space-between"
  },
  textTitle: {
    fontSize: 18
    // height:50
  },
  textPrice: {
    fontSize: 16,
    color: "red",
    fontWeight: "500"
  },
  infoExtra: {
    flexDirection: "row",
    alignItems: "center",
    // justifyContent:'space-between',
    width: 150
  },
  textExtra: {
    color: "gray",
    fontWeight: "600",
    fontSize: 11
  },
  textAddress: {
    // width:60,
    // height:18
  },
  saveAdd: {
    marginLeft: 10
  }
});
