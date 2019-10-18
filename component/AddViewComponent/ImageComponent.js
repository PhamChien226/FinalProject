import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  Alert
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { withNavigation } from "react-navigation";

let { width, height } = Dimensions.get("window");

class ImageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogin: false
    };
  }
  onPressLogin = () => {
    // const deletingRow = this.state.activeRowKey;
    Alert.alert(
      "           Thông Báo",
      "Để thực hiện chức năng này Bạn phải đăng nhập ?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        {
          text: "Đăng nhập",
          onPress: () => {
            this.props.addLogin();
            setTimeout(() => {
              this.setState({ isLogin: true });
            }, 5000);
          }
        }
      ],
      { cancelable: true }
    );
  };
  render() {
    const { height ,category_name} = this.props;
    const {isLogin} = this.state;
    return (
      <View>
        <Image
          // source={{ uri: image }}
          source={
            category_name === "Laptop"
              ? require("../../assets/laptop3.jpg")
              : require("../../assets/dienthoai.jpg")
          }
          style={{
            width: "100%",
            height: height
          }}
          resizeMode="stretch"
        />
        <LinearGradient
          colors={["black", "white"]}
          style={{
            position: "absolute",
            left: 0,
            right: 0,
            top: 0,
            bottom: 0,
            height: height,
            opacity: 0.2
          }}
        />
        <View style={styles.headerContainer}>
          <TouchableOpacity
            style={styles.buttonGoback}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <View style={styles.backgroundIconHeart}></View>
            <AntDesign name="left" size={27} color="white" />
          </TouchableOpacity>

          <View style={styles.rightHeaderWrapper}>
            <TouchableOpacity
              style={styles.buttonLikeWrapper}
              onPress={this.onPressLogin}
            >
              <View style={styles.backgroundIconHeart}></View>
              {isLogin ? (
                <AntDesign name="heart" size={25} color="#D0021B" />
              ) : (
                <AntDesign name="hearto" size={25} color="white" />
              )}
            </TouchableOpacity>
            <TouchableOpacity>
              <Entypo name="dots-three-horizontal" size={30} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

export default withNavigation(ImageComponent);

const styles = StyleSheet.create({
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
    height: 37,
    width: 37,
    justifyContent: "center",
    alignItems: "center"
    // paddingLeft: 8
  },
  buttonLikeWrapper: {
    height: 37,
    width: 37,
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
  }
});
