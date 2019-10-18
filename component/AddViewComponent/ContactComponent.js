import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import {
  Feather,
  MaterialIcons,
  MaterialCommunityIcons
} from "@expo/vector-icons";
import * as OpenAnything from "react-native-openanything";

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
        <TouchableOpacity
          style={{
            flex: 33.33,
            backgroundColor: isIndexSelect === "1" ? "#589F39" : "#F4F4F4",
            color: isIndexSelect === "1" ? "white" : "#589F39",
            justifyContent: "center",
            alignItems: "center"
          }}
          // onPress={this.call}
          onPress={() => {
            this.setState({
              isIndexSelect: "1"
            });
            OpenAnything.Call(`${publisher.phone}`);
          }}
        >
          <Feather
            name="phone-call"
            size={30}
            // color="white"
            color={isIndexSelect === "1" ? "white" : "#589F39"}
          />
          <Text style={{ color: isIndexSelect === "1" ? "white" : "#589F39" }}>
            Gọi Điện
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 33.33,
            backgroundColor: isIndexSelect === "2" ? "#589F39" : "#F4F4F4",
            color: isIndexSelect === "2" ? "white" : "#589F39",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.setState({
              isIndexSelect: "2"
            });
            OpenAnything.Text(
              `${publisher.phone}`,
              `Bạn ơi!Cho Mình hỏi Bạn đã bán ${publisher.subject} chưa.`,
              false
            );
          }}
        >
          <MaterialIcons
            name="sms"
            size={30}
            // color="white"
            // tintColor={isIndexSelect === "1" ? "white" : "#589F39"}
            color={isIndexSelect === "2" ? "white" : "#589F39"}
          />
          <Text style={{color:isIndexSelect === "2" ? "white" : "#589F39"}}>Gửi SMS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            flex: 33.33,
            backgroundColor: isIndexSelect === "3" ? "#589F39" : "#F4F4F4",
            color: isIndexSelect === "1" ? "white" : "#589F39",
            justifyContent: "center",
            alignItems: "center"
          }}
          onPress={() => {
            this.setState({
              isIndexSelect: "3"
            });
            OpenAnything.Map("CoderSchool, Đường Tôn Đản, Quận 4, Hồ Chí Minh");
          }}
        >
          <MaterialCommunityIcons
            name="google-maps"
            size={30}
            // color="white"
            // tintColor={isIndexSelect === "1" ? "white" : "#589F39"}
            color={isIndexSelect === "3" ? "white" : "#589F39"}
          />
          <Text style={{ color: isIndexSelect === "3" ? "white" : "#589F39" }}>
            Bản Đồ
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  buttonContactWrapper: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: "row",
    height: 60
  },
  buttonContact: {
    flex: 33.33,
    backgroundColor: "#589F39",
    justifyContent: "center",
    alignItems: "center"
  },
  mobile_icon: {
    width: 22,
    height: 22,
    paddingRight: 10
  }
});
