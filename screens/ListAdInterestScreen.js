import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  AsyncStorage,
  ActivityIndicator,
  StatusBar
} from "react-native";
import Text from '../components/CustomText';
import AdContainer from '../containers/AdContainer'
import ButtonGoback from "../components/ButtonGoBack";

let { width, heigth } = Dimensions.get("window");
export default class ListAdInterestScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props)
    this.state = {
       isLoading:false
    };
  };
  
  componentDidMount=()=>{
    this.props.onFetchRecommand();
  }
  renderFooter = () => {
      return <ActivityIndicator size="large" animating={true} />;
  };

  render() {
    const {list_ads_interest,isLoading} = this.props.recommand;

    if(isLoading) return this.renderFooter();
    else
    return (
      <View style={styles.container}>
        <StatusBar  barStyle="dark-content"/>
        <View style={styles.header}>
          <ButtonGoback onPress={() => {this.props.navigation.goBack();}}/>
          <Text style={styles.title}>Có thể bạn quan tâm</Text>
        </View>
          <View style={styles.borderHeader}></View>

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
            // keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
          ></FlatList>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    flexDirection: "row",
    width: width,
    backgroundColor: "white",
    paddingLeft: 10,
    paddingTop: 40,
    paddingBottom: 10
  },
  borderHeader: {
    width: width * 0.92,
    alignSelf: "center",
    height: 1,
    backgroundColor: "#E8EAED"
  },
  title: {
    paddingLeft: 15,
    fontSize: 16,
    fontWeight: "800",
    alignSelf: "center"
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
    backgroundColor: "white"
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
