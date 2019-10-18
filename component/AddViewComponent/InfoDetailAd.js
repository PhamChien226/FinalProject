import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class InfoDetailAd extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGetParam: true,
      condition_ad: "",
      elt_condition: "",
      mobile_brand: " ",
      mobile_capacity: "",
      mobile_color: "",
      mobile_model: ""
    };
  }
  componentDidMount = () => {
    const { parameters } = this.props;
    this.getParameter(parameters);
  };
  getParameter = parameters => {
    let condition_ad = "";
    let elt_condition = "";
    let mobile_brand = "";
    let mobile_capacity = "";
    let mobile_color = "";
    let mobile_model = "";
    parameters.map((item, index) => {
      if (item.name === "mobile_brand") {
        mobile_brand = item.value;
      } else if (item.name === "mobile_model") {
        mobile_model = item.value;
      } else if (item.name === "elt_condition") {
        elt_condition = item.value;
      } else if (item.name === "condition_ad") {
        condition_ad = item.value;
      } else if (item.name === "mobile_color") {
        mobile_color = item.value;
      } else if (item.name === "mobile_capacity") {
        mobile_capacity = item.value;
      }
    });
    this.setState({
      isGetParam: false,
      condition_ad,
      elt_condition,
      mobile_brand,
      mobile_capacity,
      mobile_color,
      mobile_model
    });
  };

  render() {
    // const name = ["Thương Hiệu","Dòng Máy", "Tình Trạng","Bảo Hành","Màu Sắc","Dung lượng"]
    const { parameters } = this.props;
    const {
      condition_ad,
      elt_condition,
      mobile_brand,
      mobile_capacity,
      mobile_color,
      mobile_model,
      isGetParam
    } = this.state;
    // console.log(mobile_brand)
    if (isGetParam) {
      return <View></View>; 
    } else
      return (
        <View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Thương hiệu </Text>
            <Text style={styles.contentConfig}>{mobile_brand}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Dòng máy</Text>
            <Text style={styles.contentConfig}>{mobile_model}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Tình trạng</Text>
            <Text style={styles.contentConfig}>{elt_condition}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Màu sắc</Text>
            <Text style={styles.contentConfig}>{mobile_color}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Dung lượng</Text>
            <Text style={styles.contentConfig}>{mobile_capacity}</Text>
          </View>
        </View>
      );

        // <View style={styles.infoConfigWrapper}>
        //   <View style={styles.AConfig_1}>
        //     <Text style={styles.titleConfig}>Thương hiệu </Text>
        //     <Text style={styles.contentConfig}>{mobile_brand}</Text>
        //   </View>
        //   <View style={styles.AConfig_2}>
        //     <Text style={styles.titleConfig}>Dòng máy</Text>
        //     <Text style={styles.contentConfig}>Latitude</Text>
        //   </View>
        //   <View style={styles.AConfig_1}>
        //     <Text style={styles.titleConfig}>Tình trạng</Text>
        //     <Text style={styles.contentConfig}>Đã sử dụng (chưa sửa chữa)</Text>
        //   </View>
        //   <View style={styles.AConfig_2}>
        //     <Text style={styles.titleConfig}>Kích cỡ màn hình </Text>
        //     <Text style={styles.contentConfig}>13 - 14.9 inch</Text>
        //   </View>
        //   <View style={styles.AConfig_1}>
        //     <Text style={styles.titleConfig}>Bộ vi xử lý</Text>
        //     <Text style={styles.contentConfig}>Intel Core i5</Text>
        //   </View>
        //   <View style={styles.AConfig_2}>
        //     <Text style={styles.titleConfig}>RAM</Text>
        //     <Text style={styles.contentConfig}>4G</Text>
        //   </View>
        //   <View style={styles.AConfig_1}>
        //     <Text style={styles.titleConfig}>Card màn hình</Text>
        //     <Text style={styles.contentConfig}>Onboard</Text>
        //   </View>
        //   <View style={styles.AConfig_2}>
        //     <Text style={styles.titleConfig}>Ổ cứng</Text>
        //     <Text style={styles.contentConfig}>250 GB</Text>
        //   </View>
        // </View>
    // {/* {parameters.map((item, index) => {
    //   // return(
    //   // <View style={styles.AConfig_1}>
    //   //   <Text style={styles.titleConfig}> {name[index]} </Text>
    //   //   <Text style={styles.contentConfig}> {item.value} </Text>
    //   // </View>
    //   if (item.name === "mobile_brand")
    //     return (
    //       <View style={styles.AConfig_1}>
    //         <Text style={styles.titleConfig}> Thương Hiệu </Text>
    //         <Text style={styles.contentConfig}>
    //           {item.name === "mobile_brand" ? item.value : ""}
    //         </Text>
    //       </View>
    //     );
    //   else if (item.name === "mobile_model")
    //     return (
    //       <View style={styles.AConfig_2}>
    //         <Text style={styles.titleConfig}> Dòng Máy </Text>
    //         <Text style={styles.contentConfig}>
    //           {item.name === "mobile_model" ? item.value : ""}
    //         </Text>
    //       </View>
    //     );
    //   else if (item.name === "elt_condition")
    //     return (
    //       <View style={styles.AConfig_1}>
    //         <Text style={styles.titleConfig}> Tình Trạng </Text>
    //         <Text style={styles.contentConfig}>
    //           {item.name === "elt_condition" ? item.value : ""}
    //         </Text>
    //       </View>
    //     );
    //   else if (item.name === "condition_ad")
    //     return (
    //       <View style={styles.AConfig_2}>
    //         <Text style={styles.titleConfig}> Tình Trạng bảo hành</Text>
    //         <Text style={styles.contentConfig}> Còn bảo hành</Text>
    //       </View>
    //     );
    //   else if (item.name === "mobile_color")
    //     return (
    //       <View style={styles.AConfig_1}>
    //         <Text style={styles.titleConfig}> Màu sắc</Text>
    //         <Text style={styles.contentConfig}>
    //           {item.name === "mobile_color" ? item.value : ""}
    //         </Text>
    //       </View>
    //     );
    //   else if (item.name === "mobile_capacity")
    //     return (
    //       <View style={styles.AConfig_2}>
    //         <Text style={styles.titleConfig}> Dung lượng </Text>
    //         <Text style={styles.contentConfig}>
    //           {item.name === "mobile_capacity" ? item.value : ""}
    //         </Text>
    //       </View>
    //     );
    // })} */}
  }
}

const styles = StyleSheet.create({
  infoConfigWrapper: {
    paddingVertical: 10
  },
  AConfig_1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F6F8F8",
    height: 39
  },
  AConfig_2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff",
    height: 39
  },
  titleConfig: {
    flex: 0.6
  },
  contentConfig: {
    flex: 0.4
  }
});
