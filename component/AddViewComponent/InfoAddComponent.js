import React, { Component } from "react";
import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,Image
} from "react-native";
import { EvilIcons } from "@expo/vector-icons";
import {withNavigation} from 'react-navigation'

let { width } = Dimensions.get("window");
class InfoAddComponent extends Component {
  onPressLogin=()=>{
    // const deletingRow = this.state.activeRowKey;
    Alert.alert(
        '           Thông Báo',
        'Để thực hiện chức năng này Bạn phải đăng nhập ?',
        [
            { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel' },
            {
                text: 'Đăng nhập', onPress: () => {
                  this.props.addLogin()
                }
            },
        ],
        { cancelable: true }
    );
}
    onPress=()=>{
      const {item} = this.props
      console.log("compare nè")
      this.props.getItemOwnCompare(item)
           this.props.navigation.navigate('Compare')
           
    }
  render() {
    const { date, subject, price_string } = this.props;
    return (
      <View style={styles.container}>
          <Text style={styles.textTitle}>{subject}</Text>
          <Text style={styles.textPrice}>{price_string}</Text>
          <Text style={styles.textExtra}>{date}</Text>
        {/* <View style={styles.rightContainer}> */}
          {/* <TouchableOpacity
            style={styles.buttonSaveAd}
            activeOpacity={1}
            onPress={this.onPressLogin}
          >
            <Text style={styles.textButton}>Lưu Tin</Text>
            <EvilIcons name="heart" size={25} color="red" />
          </TouchableOpacity> */}
          <TouchableOpacity
            style={styles.buttonCompare}
            activeOpacity={1}
            onPress={this.onPress}
          >
            <Image source={require("../../assets/compare.png")} style={styles.iconSoSanh} />
            <Text style={styles.textButton}> So sánh </Text>
          </TouchableOpacity>
          {/* </View> */}
      </View>
    );
  }
}
export default withNavigation(InfoAddComponent)

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical:5,
    paddingBottom: 5,
    borderWidth: 1,
    borderBottomColor: "#c4c4c4",
    borderColor: "white",
    
  },
  leftContainer:{},
  rightContainer:{
    marginRight:15
  },
  iconSoSanh:{
    height:25,
    width:25
  },
  textTitle: {
    fontSize: 19,
    fontWeight: "bold"
  },
  textPrice: {
    fontSize: 17,
    color: "brown",
    fontWeight: "500",
    paddingVertical:4,
  },
  textExtra: {
    color: "#c4c4c4",
    fontWeight: "300"
  },
  // buttonSaveAd: {
  //   position:"absolute",
  //   top:0,
  //   left:width*0.7,
  //   flexDirection: "row",
  //   height: 30,
  //   width: 90,
  //   borderColor: "red",
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   alignItems: "center",
  //   justifyContent: "center"
  // },
  buttonCompare: {
    position:"absolute",
    top:30,
    left:width*0.7,
    flexDirection: "row",
    height: 30,
    width: 90,
    backgroundColor:'#ffab00',
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center"
  },
  textButton: {
    alignSelf: "center"
  }
});
