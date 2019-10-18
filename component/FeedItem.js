import React, { Component } from "react";
import { Text, StyleSheet, View, Image, Dimensions,TouchableOpacity } from "react-native";
import { withNavigation } from "react-navigation";
import { LinearGradient } from "expo-linear-gradient";

let { width } = Dimensions.get("window");
class FeedItem extends Component {
  render() {
    const { index,item,key } = this.props;

    if (index < 2)
      return (
        <View style={styles.cateRSWrapper}>
          <TouchableOpacity
            style={styles.imageWrapperCateRS}
            activeOpacity={0.8}
          >
            <Image
              source={item.image}
              style={styles.imageCateRS}
              resizeMode="cover"
            />
            <Text style={styles.nameCategory}>{item.name_category}</Text>
          </TouchableOpacity>
        </View>
      );

    return (
      <TouchableOpacity
        onPress={() => {
          if (item.key === "3") {
            this.props.navigation.navigate("ListItem", {
              id_main_category: item.id_main_category
            });
          }
        }}
        activeOpacity={0.8}
        style={styles.imageWapperCate}
      >
        <Image
          source={item.image}
          style={styles.image}
          resizeMode="stretch"
        />
        <LinearGradient
          colors={["black", "white"]}
          style={{
            position: "absolute",
            left: 4,
            right: 3,
            top: 4,
            height: 110,
            opacity: 0.2,
            borderRadius:2,
          }}
        />
        <Text style={styles.nameCategory}>{item.name_category}</Text>
      </TouchableOpacity>
    );
  }
}

export default withNavigation(FeedItem);

const styles = StyleSheet.create({
  cateRSWrapper:{
    borderRadius:5
  },
  imageWrapperCateRS: {
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    margin: 0,
    borderRadius:5
  },
  imageCateRS: {
    margin: 3,
    height: 95,
    width:width*0.96,
    borderRadius:5
  },
  image: {
    width: width * 0.47,
    margin: 3,
    borderRadius:2
  },
  imageWapperCate:{
    borderRadius:5,
    justifyContent:"center",
    alignItems:'center'
  },
  nameCategory: {
    position: "absolute",
    top: 15,
    left: 10,
    fontWeight: "400",
    fontSize: 16,
    color: "white"
  }
});
