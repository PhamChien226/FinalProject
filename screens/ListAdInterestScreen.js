import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  AsyncStorage,
  ActivityIndicator
} from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import listProductsInterest from '../utils/ListProductsInterest'
import AdContainer from '../containers/AdContainer'

let { width, heigth } = Dimensions.get("window");
export default class ListAdInterestScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });

  constructor(props) {
    super(props)
  
    this.state = {
       list_ads_interest: [],
       isLoading:false
    };
  };
  
  componentDidMount=()=>{
    this.callAPI()
  }
  callAPI = async () => {
    try {
      const { list_ads_interest } = this.state;
      this.setState({isLoading:true})
      const fingerprint = await AsyncStorage.getItem('@fingerprint')
      const response = await fetch(
        `https://chotot-recommendersys.appspot.com/general-recommend?user_fingerprint=${fingerprint}`
      );
      const dataJson = await response.json();
      this.setState({
        isLoading:false,
        list_ads_interest: list_ads_interest.concat(dataJson.ads),
      });
    } catch (error) {}
  };
  renderFooter = () => {
    const { isLoading} = this.state;
      return <ActivityIndicator size="large" animating={isLoading} />;
  };

  render() {
    const {list_ads_interest,isLoading} = this.state

    if(isLoading) return this.renderFooter();
    else
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonGoback}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <AntDesign name="left" size={25} color="black" />
          </TouchableOpacity>
          <Text style={styles.title}>Có thể bạn quan tâm</Text>
        </View>

        <FlatList
            data={list_ads_interest}
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
                  nameTransparent={"ListItem"}
                ></AdContainer>
              );
            }}
            keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
          ></FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
},
header: {
    width: width,
    flexDirection: "row",
    paddingLeft: 10,
    paddingTop: 40,
    backgroundColor: "#ffab00",
    paddingBottom:7
  },
  title: {
    paddingLeft: 15,
    fontSize: 16,
    fontWeight:'800'
  },
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
    borderColor: "white",
    backgroundColor:'white'
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
