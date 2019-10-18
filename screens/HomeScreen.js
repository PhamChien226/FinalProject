import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions,ScrollView } from "react-native";

import * as Font from 'expo-font';

import { FeedItem, Search } from "../component";

import {
  ProductsListViewed,
  ProductsListInterest
} from "../component/ListProduct";

import dataCategory from "../utils/dataHome";

import Slide  from "../component/Slide";
import LogoComponent from '../component/Header/LogoComponent'


let{width} = Dimensions.get('window')
export default class HomeScreen extends Component {
constructor(props) {
  super(props)

  this.state = {
    fontLoaded:false
  };
};

  async  componentWillMount() {
    await Font.loadAsync({
      'sf-font-pro': require('../assets/fonts/FontsFree-Net-SFProDisplay-Regular.ttf'),
    });
    this.setState({fontLoaded :true})
  }
  updateSearch = text => {
    // xử lý kết quả search ở đây
  };
  render() {
    const {fontLoaded} =  this.state;
 return (
   <View style={styles.container}>
     <LogoComponent />
     <Search
       updateSearch={this.updateSearch}
       textplace={"Bạn cần tìm gì hôm nay..."}
       width={width * 0.9}
     />
     <ScrollView>
       <View style={styles.scrollViewContainer}>
         <Slide
           style={{ height: 120, backgroundColor: "#ffab00", borderRadius: 5 }}
         />
         {/* <ProductsListViewed/> */}
         <ProductsListInterest/>
          
         {fontLoaded ? (
           <Text
             style={{
               marginLeft: 10,
               paddingVertical: 10,
               fontWeight: "800",
               fontFamily: "sf-font-pro"
             }}
           >
             Khám Phá Danh Mục
           </Text>
         ) : <Text></Text>}
         <View style={styles.categoryWrapper}>
           {dataCategory.map((item, index) => {
             return <FeedItem item={item} index={index} key={item.key} />;
           })}
         </View>
       </View>
     </ScrollView>
   </View>
 ); 
  }
}

HomeScreen.navigationOptions = {
  header: null,
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor:"#ffba00",
    paddingTop:30
  },
  scrollViewContainer:{
    flex: 1,
    alignContent: "center",
    backgroundColor:"white"
  },
  textGuild: {
    marginLeft: 10,
    paddingVertical:10,
    fontWeight:"800",
    fontFamily:'sf-font-pro'
    
  },
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center"
  },
});
