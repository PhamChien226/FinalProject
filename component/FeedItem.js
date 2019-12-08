import React, { Component } from "react";
import {  StyleSheet, View, Image, Dimensions,TouchableOpacity,ImageBackground } from "react-native";
import Text from '../components/CustomText';
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";
import newListCategory from '../utils/newListCategory'

let { width } = Dimensions.get("window");
class FeedItem extends Component {
  
  renderBigCategory = ()=> {
    const { index,item,key } = this.props;
    return (
      // <View style={styles.cateRSWrapper}>
        <TouchableOpacity
          style={styles.buttonWrapperCateRS}
          activeOpacity={0.8}
          onPress={() => {
            if (item.name_category === "Đồ điện tử") {
                this.props.clickCategory(newListCategory);
              this.props.navigation.navigate("ListItem", {
                id_main_category: item.id_main_category
              });
            }
          }}
        >
          <Image
            source={item.image}
            style={styles.imageCateRS}
            resizeMode="cover"
          />
          <Text style={styles.nameCategory}>{item.name_category}</Text>
        </TouchableOpacity>
      // </View>
    );
  }

  renderSmallCategory =()=> {
    const { index,item,key } = this.props;
    return (
      // <View style={styles.smallCategory}>
        <TouchableOpacity
          onPress={() => {
            // if (item.key === "3") {
            if (item.name_category === "Đồ điện tử") {
                this.props.clickCategory(newListCategory);
              this.props.navigation.navigate("ListItem", {
                id_main_category: item.id_main_category
              });
            }
          }}
          activeOpacity={0.8}
          style={styles.imageWapperCate}
        >
          <ImageBackground
            source={item.image}
            resizeMode="stretch"
            style={styles.image}
            imageStyle={{ borderRadius: 3 }}
          >
            <LinearGradient
              colors={['rgba(57, 57, 57, 1.0)','rgba(196, 196, 196, 0)' ]}
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                top: 0,
                // bottom: 0,
                height:45,
                // opacity: 0.2,
                borderRadius: 8
              }}
            />
          </ImageBackground>
          <Text style={styles.nameCategory}>{item.name_category}</Text>
        </TouchableOpacity>
      // </View>  
    );
  }
  render() {
    const { index,item,key } = this.props;
    if (index < 2) return this.renderBigCategory();
    else return this.renderSmallCategory();
  }
}

export default withNavigation(FeedItem);

const styles = StyleSheet.create({
  cateRSWrapper:{
  },
  buttonWrapperCateRS: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 3,
  },
  imageCateRS: {
    height: 95,
    width:width*0.96,
    borderRadius:5
  },
  smallCategory:{
    borderRadius:3
  },
  imageWapperCate:{
    justifyContent:"center",
    alignItems:'center',
    width: width * 0.47,
    height:110,
    margin:3, 
  },
  image: {
    width:'100%',
    height:'100%'
  },
  nameCategory: {
    position: "absolute",
    top: 6, 
    left: 10,
    fontWeight: '400',
    fontSize: 15,
    color: "white",
    width:150,
  }
});
