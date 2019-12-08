import React, { Component } from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  Dimensions,
  Alert,Image
} from "react-native";
import Text from '../../components/CustomText';
import { SimpleLineIcons } from "@expo/vector-icons";
import {withNavigation} from 'react-navigation'

class InfoAddComponent extends Component {
  onPressLogin=()=>{
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
      const {item,image} = this.props
      this.props.getItemOwnCompare(item,image)
           this.props.navigation.navigate('Compare')
           
    }
  render() {
    const { date, subject, price_string } = this.props;
    fontSF = this.props.adViewState;
   
    return (
      <View style={styles.container}>
        <Text style={styles.textTitle}>{subject}</Text>
        <View style={styles.priceAndCompare}>
          <Text style={styles.textPrice}>{price_string}</Text>
          <TouchableOpacity
            style={styles.buttonCompare}
            activeOpacity={1}
            onPress={this.onPress}
          >
            <Image
              source={require("../../assets/compare.png")}
              style={styles.iconSoSanh}
            />
            <Text style={styles.textButton}> So sánh </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.wrapperdate}>
        <SimpleLineIcons name="note" size={10
        } color="#727C8E" />
        <Text style={styles.textExtra}>{" "}{date}</Text>
        </View>
        {/* <View style={styles.rightContainer}> */}
        {/* <TouchableOpacity
            style={styles.buttonSaveAd}
            activeOpacity={1}
            onPress={this.onPressLogin}
          >
            <Text style={styles.textButton}>Lưu Tin</Text>
            <EvilIcons name="heart" size={25} color="red" />
          </TouchableOpacity> */}
        {/* <TouchableOpacity
            style={styles.buttonCompare}
            activeOpacity={1}
            onPress={this.onPress}
          >
            <Image source={require("../../assets/compare.png")} style={styles.iconSoSanh} />
            <Text style={styles.textButton}> So sánh </Text>
          </TouchableOpacity> */}
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
    borderBottomColor: "#F3F6FB",
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
    fontWeight: "bold",
    // fontWeight: "400",
  },
  priceAndCompare:{
    flexDirection:'row',
    alignItems:"center"

  },
  textPrice: {
    flex:0.75,
    fontSize: 17,
    color: "brown",
    fontWeight: "bold",
    // fontWeight: "400",
    paddingVertical:4,
  },
  wrapperdate:{
    flexDirection:'row',
    alignItems:'center'
  },
  textExtra: {
    fontSize:12,
    color: "gray",
    fontWeight: "300",
  },
  buttonCompare: {
    flex:0.25,
    flexDirection: "row",
    height: 30,
    backgroundColor:'#ffab00',
    alignItems: "center",
    borderRadius: 10,
    justifyContent: "center",
  },
  textButton: {
    alignSelf: "center"
  }
});
