import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Text from '../../components/CustomText';

export default class InfoDetailAdLapTop extends Component {

  render() {
    const {
      parameters,
      parameters: {
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
      }
    } = this.props;
    
      return (
        <View style={styles.infoConfigWrapper}>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Thương hiệu </Text>
          <Text style={styles.contentConfig}>{pc_brand.value}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Dòng máy</Text>
          <Text style={styles.contentConfig}>{pc_model.value}</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Tình trạng</Text>
          <Text style={styles.contentConfig}>{elt_condition.value}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Kích cỡ màn hình </Text>
          <Text style={styles.contentConfig}>{laptop_screen_size.value}</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Bộ vi xử lý</Text>
          <Text style={styles.contentConfig}>{pc_cpu.value}</Text>
        </View>
        <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>RAM</Text>
          <Text style={styles.contentConfig}>{pc_ram.value} GB</Text>
        </View>
        <View style={styles.AConfig_1}>
          <Text style={styles.titleConfig}>Card màn hình</Text>
          <Text style={styles.contentConfig}>{pc_vga.value}</Text>
        </View>
        {/* <View style={styles.AConfig_2}>
          <Text style={styles.titleConfig}>Ổ cứng</Text>
          <Text style={styles.contentConfig}>{pc_drive_capacity.value}</Text>
        </View> */}
      </View>
      );
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
    flex: 0.5
  },
  contentConfig: {
    flex: 0.5
  }
});
