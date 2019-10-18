import React, { Component } from "react";
import { Text, StyleSheet, View, Dimensions, Image } from "react-native";
import { AntDesign, Entypo } from "@expo/vector-icons";
import { Avatar } from "react-native-elements";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MiniAddViewCompare from "../component/AddView/MiniAddViewCompare";

let { width, height } = Dimensions.get("window");
export default class DetailCompareScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  constructor(props) {
    super(props);

    this.state = {
      isGetParam: true,
      condition_ad_1: "",
      elt_condition_1: "",
      laptop_screen_size_1: "",
      pc_brand_1: " ",
      pc_cpu_1: "",
      pc_drive_capacity_1: "",
      pc_model_1: "",
      pc_ram_1: "",
      pc_vga_1: "",

      condition_ad_2: "",
      elt_condition_2: "",
      laptop_screen_size_2: "",
      pc_brand_2: " ",
      pc_cpu_2: "",
      pc_drive_capacity_2: "",
      pc_model_2: "",
      pc_ram_2: "",
      pc_vga_2: ""
    };
  }
  componentDidMount =  () => {
     this.getParameter_1();
     this.getParameter_2();
  };

  getParameter_1 = () => {
    const {
      ownCompare: { parameters }
    } = this.props.compareState;

    let condition_ad_1 = "";
    let elt_condition_1 = "";
    let laptop_screen_size_1 = "";
    let pc_brand_1 = "";
    let pc_cpu_1 = "";
    let pc_drive_capacity_1 = "";
    let pc_model_1 = "";
    let pc_ram_1 = "";
    let pc_vga_1 = "";
    parameters.map((item, index) => {
      if (item.name === "laptop_screen_size") {
        laptop_screen_size_1 = item.value;
      } else if (item.name === "pc_brand") {
        pc_brand_1 = item.value;
      } else if (item.name === "pc_cpu") {
        pc_cpu_1 = item.value;
      } else if (item.name === "pc_drive_capacity") {
        pc_drive_capacity_1 = item.value;
      } else if (item.name === "pc_model") {
        pc_model_1 = item.value;
      } else if (item.name === "pc_vga") {
        pc_vga_1 = item.value;
      } else if (item.name === "elt_condition") {
        elt_condition_1 = item.value;
      } else if (item.name === "pc_ram") {
        pc_ram_1 = item.value;
      }
    });
    this.setState({
      isGetParam: false,
      condition_ad_1,
      elt_condition_1,
      laptop_screen_size_1,
      pc_brand_1,
      pc_cpu_1,
      pc_model_1,
      pc_drive_capacity_1,
      pc_ram_1,
      pc_vga_1
    });
  };
  getParameter_2 = () => {
    const {
      itemCompare: { parameters }
    } = this.props.compareState;

    let condition_ad_2 = "";
    let elt_condition_2 = "";
    let laptop_screen_size_2 = "";
    let pc_brand_2 = "";
    let pc_cpu_2 = "";
    let pc_drive_capacity_2 = "";
    let pc_model_2 = "";
    let pc_ram_2 = "";
    let pc_vga_2 = "";

    parameters.map((item, index) => {
      if (item.name === "laptop_screen_size") {
        laptop_screen_size_2 = item.value;
      } else if (item.name === "pc_brand") {
        pc_brand_2 = item.value;
      } else if (item.name === "pc_cpu") {
        pc_cpu_2 = item.value;
      } else if (item.name === "pc_drive_capacity") {
        pc_drive_capacity_2 = item.value;
      } else if (item.name === "pc_model") {
        pc_model_2 = item.value;
      } else if (item.name === "pc_vga") {
        pc_vga_2 = item.value;
      } else if (item.name === "elt_condition") {
        elt_condition_2 = item.value;
      } else if (item.name === "pc_ram") {
        pc_ram_2 = item.value;
      }
    });
    this.setState({
      isGetParam: false,
      condition_ad_2,
      elt_condition_2,
      laptop_screen_size_2,
      pc_brand_2,
      pc_cpu_2,
      pc_model_2,
      pc_drive_capacity_2,
      pc_ram_2,
      pc_vga_2
    });
  };

  render() {
    const { ownCompare, itemCompare } = this.props.compareState;
    // console.log("Detail Render");
    // console.log(this.props.compareState);
    // console.log(itemCompare)
    const {
      isGetParam,
      condition_ad_1,
      elt_condition_1,
      laptop_screen_size_1,
      pc_brand_1,
      pc_cpu_1,
      pc_model_1,
      pc_drive_capacity_1,
      pc_ram_1,
      pc_vga_1,
      condition_ad_2,
      elt_condition_2,
      laptop_screen_size_2,
      pc_brand_2,
      pc_cpu_2,
      pc_model_2,
      pc_drive_capacity_2,
      pc_ram_2,
      pc_vga_2
    } = this.state;
    if (isGetParam) return <View></View>;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.buttonGoback}
            onPress={() => {
              this.props.navigation.goBack();
            }}
          >
            <AntDesign name="left" size={27} color="black" />
          </TouchableOpacity>
          <Text style={styles.textHeader}>So sánh chi tiết</Text>
        </View>

        <ScrollView>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Giá</Text>
            <Text style={styles.contentConfig_1}>{ownCompare.price_str}</Text>
            <Text style={styles.contentConfig_2}>{itemCompare.price_str}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Thương hiệu </Text>
            <Text style={styles.contentConfig_1}>{pc_brand_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_brand_2}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Dòng máy</Text>
            <Text style={styles.contentConfig_1}>{pc_model_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_model_2}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Tình trạng</Text>
            <Text style={styles.contentConfig_1}>{elt_condition_1}</Text>
            <Text style={styles.contentConfig_2}>{elt_condition_2}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Kích cỡ màn hình </Text>
            <Text style={styles.contentConfig_1}>{laptop_screen_size_1}</Text>
            <Text style={styles.contentConfig_2}>{laptop_screen_size_2}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Bộ vi xử lý</Text>
            <Text style={styles.contentConfig_1}>{pc_cpu_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_cpu_2}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>RAM</Text>
            <Text style={styles.contentConfig_1}>{pc_ram_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_ram_2}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Card màn hình</Text>
            <Text style={styles.contentConfig_1}>{pc_vga_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_vga_2}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Ổ cứng</Text>
            <Text style={styles.contentConfig_1}>{pc_drive_capacity_1}</Text>
            <Text style={styles.contentConfig_2}>{pc_drive_capacity_2}</Text>
          </View>

          <View style={styles.miniViewCompare}>
            <MiniAddViewCompare
              item={ownCompare}
              image={require("../assets/laptop1.jpg")}
            />
            <MiniAddViewCompare
              item={itemCompare}
              image={require("../assets/laptop3.jpg")}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}

// export default withNavigation(DetailCompareScreen)
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  header: {
    backgroundColor: "#ffab00",
    flexDirection: "row",
    // justifyContent: "\-between",
    paddingHorizontal: 15,
    alignItems: "center",
    paddingTop: 35,
    paddingBottom: 10
  },
  textHeader: {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 2
  },
  buttonGoback: {},
  nameSubject: {
    height: 55,
    width: width,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3
  },
  infoSubject: {
    flexDirection: "column"
  },
  iconVS: {
    height: 40,
    width: 40,
    borderWidth: 1,
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center"
  },

  AConfig_1: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#F6F8F8"
  },
  AConfig_2: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    backgroundColor: "#ffffff"
  },
  titleConfig: {
    flex: 0.4
  },
  contentConfig_1: {
    flex: 0.3
  },
  contentConfig_2: {
    flex: 0.3
  },

  miniViewCompare: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
