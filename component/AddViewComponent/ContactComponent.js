import React from "react";
import { View, TouchableOpacity, StyleSheet,Dimensions } from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons
} from "@expo/vector-icons";
import * as OpenAnything from "react-native-openanything";
import Text from '../../components/CustomText';
import ButtonContact from '../../components/ButtonContact'

// call = () => {
//     //handler to make a call
//     const {
//       ad_view: { publisher }
//     } = this.state;
//     const args = {
//       number: publisher.phone,
//       prompt: false
//     };
//   };

let {width,height} = Dimensions.get('window');
export default class ContactComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isIndexSelect: "1"
    };
  } 
  render() {
    const { isIndexSelect } = this.state;
    const { publisher } = this.props;

    return (
      <View style={styles.buttonContactWrapper}>
        <ButtonContact
          title="Gọi Điện"
          onPress={() => {
            OpenAnything.Call(`${publisher.phone}`);      
          }}
        >
          <Ionicons name="ios-call" size={20} color={"white"} />
        </ButtonContact>
        <ButtonContact
          title="Gửi SMS"
          onPress={() => {
            OpenAnything.Text(
              `${publisher.phone}`,
              `Bạn ơi!Cho Mình hỏi Bạn đã bán ${publisher.subject} chưa.`,
              false
            );
          }}
        >
          <MaterialIcons name="sms" size={20} color={"white"} />
        </ButtonContact>
        <ButtonContact
          title="Bản Đồ"
          onPress={() => {
            OpenAnything.Map("CoderSchool, Đường Tôn Đản, Quận 4, Hồ Chí Minh");
          }}
        >
          <MaterialCommunityIcons
            name="google-maps"
            size={20}
            color={"white"}
          />
        </ButtonContact>
        {/* <TouchableOpacity
          style={{
            // flex: 33.33,
            flexDirection:'row',
            width:width*0.27,
            height:35,
            // backgroundColor: isIndexSelect === "1" ? "#589F39" : "#F4F4F4",
            // color: isIndexSelect === "1" ? "white" : "#589F39",
            backgroundColor: "#589F39",
            color: "white",
            justifyContent: "center",
            alignItems: "center",
          
          }}
          // onPress={this.call}
          onPress={() => {
            // this.setState({
            //   isIndexSelect: "1"
            // });
            OpenAnything.Call(`${publisher.phone}`);
          }}
        >
         
          <Feather
            name="phone-call"
            size={20}
            // color="white"
            color={isIndexSelect === "1" ? "white" : "#589F39"}
          />
           <Text style={{ color: isIndexSelect === "1" ? "white" : "#589F39" }}>
            Gọi Điện
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // flex: 33.33,
            flexDirection:'row',
            width:width*0.27,
            height:40,
            // backgroundColor: isIndexSelect === "2" ? "#589F39" : "#F4F4F4",
            // color: isIndexSelect === "2" ? "white" : "#589F39",
            backgroundColor: "#589F39",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            // this.setState({
            //   isIndexSelect: "2"
            // });
            OpenAnything.Text(
              `${publisher.phone}`,
              `Bạn ơi!Cho Mình hỏi Bạn đã bán ${publisher.subject} chưa.`,
              false
            );
          }}
        >
          <MaterialIcons
            name="sms"
            size={20}
            // color="white"
            // tintColor={isIndexSelect === "1" ? "white" : "#589F39"}
            color={isIndexSelect === "2" ? "white" : "#589F39"}
          />
          <Text style={{color:isIndexSelect === "2" ? "white" : "#589F39"}}>SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            // flex: 33.33,
            flexDirection:'row',
            width:width*0.27,
            height:40,
            // backgroundColor: isIndexSelect === "3" ? "#589F39" : "#F4F4F4",
            // color: isIndexSelect === "1" ? "white" : "#589F39",
            backgroundColor: "#589F39",
            color: "white",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            // this.setState({
            //   isIndexSelect: "3"
            // });
            OpenAnything.Map("CoderSchool, Đường Tôn Đản, Quận 4, Hồ Chí Minh");
          }}
        >
          <MaterialCommunityIcons
            name="google-maps"
            size={20}
            // color="white"
            // tintColor={isIndexSelect === "1" ? "white" : "#589F39"}
            color={isIndexSelect === "3" ? "white" : "#589F39"}
          />
          <Text style={{ color: isIndexSelect === "3" ? "white" : "#589F39" }}>
            Map
          </Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContactWrapper: {
    flexDirection: "row",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    // top:height * 0.9,
    height: 45,
    // backgroundColor:'red',
    justifyContent:'space-around',
    alignItems:"center"
  },
  
  mobile_icon: {
    width: 22,
    height: 22,
    paddingRight: 10
  }
});
