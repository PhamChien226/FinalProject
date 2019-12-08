import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import Text from '../../components/CustomText';
import { FlatList } from "react-native-gesture-handler";

export default class InfoDetailAd extends Component {
  componentDidMount = () => {
  };

  render() {
    const {
      parameters,
      parameters: {
        elt_condition,
        mobile_brand,
        mobile_capacity,
        mobile_color,
        mobile_model
      }
    } = this.props;
      return (
        <View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Thương hiệu </Text>
            <Text style={styles.contentConfig}>{mobile_brand.value}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Dòng máy</Text>
            <Text style={styles.contentConfig}>{mobile_model.value}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Tình trạng</Text>
            <Text style={styles.contentConfig}>{elt_condition.value}</Text>
          </View>
          <View style={styles.AConfig_2}>
            <Text style={styles.titleConfig}>Màu sắc</Text>
            <Text style={styles.contentConfig}>{mobile_color.value}</Text>
          </View>
          <View style={styles.AConfig_1}>
            <Text style={styles.titleConfig}>Dung lượng</Text>
            <Text style={styles.contentConfig}>{mobile_capacity.value}</Text>
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
