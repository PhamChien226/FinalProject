import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Image } from "react-native";
import Text from '../components/CustomText';
import { AntDesign, Entypo } from "@expo/vector-icons";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import MiniAddViewCompare from "../component/AddView/MiniAddViewCompare";
import ButtonGoback from "../components/ButtonGoBack";

let { width, height } = Dimensions.get("window");
export default class DetailCompareScreen extends Component {
  static navigationOptions = ({ navigation }) => ({
    header: null
  });
  componentDidMount =  () => {
  };
  render() {
    const {
      ownCompare,
      itemCompare,
      imageOfToBeItem,
      imageOfOwnItem
    } = this.props.compareState;
    const ownParamester = this.props.compareState.ownCompare.parameters;
    const itemParamester = this.props.compareState.itemCompare.parameters;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <ButtonGoback style={styles.buttonGoback} onPress={()=> this.props.navigation.goBack()}/>
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
            <Text style={styles.contentConfig_1}>{ownParamester.pc_brand.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.pc_brand.value}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Dòng máy</Text>
            <Text style={styles.contentConfig_1}>{ownParamester.pc_model.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.pc_model.value}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Tình trạng</Text>
            <Text style={styles.contentConfig_1}>{ownParamester.elt_condition.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.elt_condition.value}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Kích cỡ màn hình </Text>
            <Text style={styles.contentConfig_1}>{ownParamester.laptop_screen_size.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.laptop_screen_size.value}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Bộ vi xử lý</Text>
            <Text style={styles.contentConfig_1}>{ownParamester.pc_cpu.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.pc_cpu.value}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>RAM</Text>
            <Text style={styles.contentConfig_1}>{ownParamester.pc_ram.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.pc_ram.value}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Card màn hình</Text>
            <Text style={styles.contentConfig_1}>{ownParamester.pc_vga.value}</Text>
            <Text style={styles.contentConfig_2}>{itemParamester.pc_vga.value}</Text>
          </View>
          {/* <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Ổ cứng</Text>
            <Text style={styles.contentConfig_1}>{ownCompare.pc_drive_capacity.value}</Text>
            <Text style={styles.contentConfig_2}>{itemCompare.pc_drive_capacity.value}</Text>
          </View> */}

          <View style={styles.miniViewCompare}>
            <MiniAddViewCompare
              item={ownCompare}
              image={imageOfOwnItem}
            />
            <MiniAddViewCompare
              item={itemCompare}
              image={imageOfToBeItem}
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
    // backgroundColor: "#ffab00",
    backgroundColor: "white",
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingTop: 40,
  },

  textHeader : {
    paddingLeft: 20,
    fontSize: 16,
    fontWeight: "bold",
    paddingBottom: 2,
    alignSelf:'center'
  },
  buttonGoback: {
    paddingBottom:5
  },
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
