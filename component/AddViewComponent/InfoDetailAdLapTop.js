import React, { Component } from "react";
import { Text, StyleSheet, View } from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class InfoDetailAdLapTop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isGetParam: true,
      condition_ad: "",
      elt_condition: "",
      laptop_screen_size:'',
      pc_brand: " ",
      pc_cpu: "",
      pc_drive_capacity: "",
      pc_model: "",
      pc_ram: "",
      pc_vga: "",
    };
  }
  componentDidMount = () => {
    const { parameters } = this.props;
    this.getParameter(parameters);
  };
  getParameter = parameters => {
    let condition_ad = "";
    let elt_condition = "";
    let laptop_screen_size = "";
    let pc_brand = "";
    let pc_cpu = "";
    let pc_drive_capacity = "";
    let pc_model = "";
    let pc_ram = "";
    let pc_vga = "";
    parameters.map((item, index) => {
      if (item.name === "laptop_screen_size") {
        laptop_screen_size = item.value;
      } else if (item.name === "pc_brand") {
        pc_brand = item.value;
      } else if (item.name === "pc_cpu") {
        pc_cpu = item.value;
      } else if (item.name === "pc_drive_capacity") {
        pc_drive_capacity = item.value;
      } else if (item.name === "pc_model") {
        pc_model = item.value;
      } else if (item.name === "pc_vga") {
        pc_vga = item.value;
      } else if (item.name === "elt_condition") {
        elt_condition = item.value;
      } else if (item.name === "pc_ram") {
        pc_ram = item.value;
      }
    });
    this.setState({
      isGetParam: false,
      condition_ad,
      elt_condition,
      laptop_screen_size,
      pc_brand,
      pc_cpu,
      pc_model,
      pc_drive_capacity,
      pc_ram,
      pc_vga
    });
  };

  render() {
    const { parameters } = this.props;
    const {
      condition_ad,
      elt_condition,
      laptop_screen_size,
      pc_brand,
      pc_cpu,
      pc_model,
      pc_drive_capacity,
      pc_ram,
      pc_vga,
      isGetParam
    } = this.state;
    // console.log(mobile_brand)
    if (isGetParam) {
      return <View></View>; 
    } else
      return (
        <View style={styles.infoConfigWrapper}>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Thương hiệu </Text>
          <Text style={styles.contentConfig}>{pc_brand}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Dòng máy</Text>
          <Text style={styles.contentConfig}>{pc_model}</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Tình trạng</Text>
          <Text style={styles.contentConfig}>{elt_condition}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Kích cỡ màn hình </Text>
          <Text style={styles.contentConfig}>{laptop_screen_size}</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Bộ vi xử lý</Text>
          <Text style={styles.contentConfig}>{pc_cpu}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>RAM</Text>
          <Text style={styles.contentConfig}>{pc_ram}</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Card màn hình</Text>
          <Text style={styles.contentConfig}>{pc_vga}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Ổ cứng</Text>
          <Text style={styles.contentConfig}>{pc_drive_capacity}</Text>
        </View>
      </View>
      );

        
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
