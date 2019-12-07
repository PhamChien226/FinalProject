import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
  Dimensions,
  ActivityIndicator,
} from "react-native";
import {  Search } from "../component"; 
import {  FontAwesome } from "@expo/vector-icons";
import FilterComponent from "../component/FilterComponent/FilterComponent";
import FilterCategory from "../component/FilterComponent/FilterCategory";
import AdContainer from "../containers/AdContainer";
import ButtonGoback from '../components/ButtonGoBack';
import Filter from "../component/FilterComponent/Filter";

let { width } = Dimensions.get("window");
export default class ListItemScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isRefreshing: false
    };
  }

  componentDidMount = async () => {
    await this.props.onFetchListItem();
  };

  onEndReached = () => {
    this.props.onEndRead();
    this.props.postLogEvenClick();
  };

  onRefreshing =  () => {
     this.props.onRefresh();
    this.props.postLogEvenClick();
  };

  renderFooter = () => {
    const { isRefreshing } = this.state;
    if (!isRefreshing)
      return <ActivityIndicator size="large" animating={true} />;
  };
  _renderHeader = () => {
    return <FilterCategory />;
  };

  render() {
    const { list_ads } = this.props.adState; 
    return (
      <View style={{ flex: 1 }}>
        <View style={styles.container} ref={"listItem"}>
          <View style={styles.headerContainer}>
            <ButtonGoback
              style={styles.buttonGoback}
              onPress={() => this.props.navigation.goBack()}
            />
            <Search textplace={"Đồ điện tử - Laptop"} style={styles.search} />
            <TouchableOpacity style={styles.iconBookmark}>
              <FontAwesome name="bookmark-o" size={27} color="black" />
            </TouchableOpacity>
          </View>

          {/* <FilterComponent /> */}
          <Filter
           />

          <FlatList
            data={list_ads}
            style={{ backgroundColor: "white", marginBottom: 105 }}
            ListHeaderComponent={this._renderHeader}
            renderItem={({ item, index }) => {
              return (
                <AdContainer
                  index={index}
                  transparent={this}
                  item={item}
                  key={index}
                  index={index}
                  nameTransparent={"ListItem"}
                ></AdContainer>
              );
            }}
            keyExtractor={(item, index) => item.subject}
            onEndReached={this.onEndReached}
            onEndReachedThreshold={0.1}
            ListFooterComponent={this.renderFooter()}
            onRefresh={this.onRefreshing}
            refreshing={false}
          ></FlatList>
        </View>
      </View>
    );
  }
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingBottom: 30
  },
  headerContainer: {
    paddingTop: 30,
    flexDirection: "row",
    backgroundColor: "#ffba00",
    alignItems: "center", 
    justifyContent: 'space-around',
    
  },
  buttonGoback: {
    paddingHorizontal: 8,
    alignSelf: 'center',
    width:width*0.11,
  },
  search:{
    width:width*0.77,
  },
  iconBookmark: {
    // marginLeft:9,
    width:width*0.10,
    alignSelf:'center',
    justifyContent:"center",
    alignItems:'center'
    
  }  
});