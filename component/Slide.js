import React from "react";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  ImageBackground
} from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import listAdvertisement from "../utils/ListAdvertisement";
import Slideshow from "react-native-slideshow";

const FastImage = ({ style, children, ...props }) => {
  return (
    <Image {...props} style={[style, styles.image]} resizeMode="stretch" />
  );
};

let { width } = Dimensions.get("window");
class Slide extends React.Component {
  //   constructor(props) {
  //   super(props)
  //   this.state = {
  //     position: 1,
  //     interval: null,
  //   };
  // };

  // componentWillMount() {
  //   console.log("componentWillMount is called")
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position == listAdvertisement.length ? 1 : this.state.position + 1
  //       });
  //     },5000)
  //   })
  // }
  // componentWillUnmount(){
  //   console.log("componentWillUnmount is called")
  //   clearInterval(this.state.interval);
  // }
  // //lấy url có index ứng với position
  // _getAdvertisement = () => {
  //   const {position} = this.state;
  //   let url ;
  //   let length =listAdvertisement.length;
  //   for (let index = 1; index < length; index++) {
  //     if (listAdvertisement[index].index == position) {
  //       url = listAdvertisement[index].url;
  //       break;
  //     }
  //   }
  //   // listAdvertisement.map((item,index) => {
  //   //   if(item.index === position ){
  //   //     console.log(item.url)
  //   //     url = item.url;
  //   //     break
  //   //   }
  //   //   else console.log("not found url");
  //   // })
  //   console.log(url);
  //   return url;
  // }
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     position: 1,
  //     interval: null,
  //   };
  // }

  // componentWillMount() {
  //   this.setState({
  //     interval: setInterval(() => {
  //       this.setState({
  //         position: this.state.position === listAdvertisement.length ? 0 : this.state.position + 1
  //       });
  //     }, 3000)
  //   });
  // }

  // componentWillUnmount() {
  //   clearInterval(this.state.interval);
  // }

  render() {
    return (
      <View style={[this.props.style, styles.container]}>
        {/* <Slideshow
          // dataSource={this.state.dataSource}
          dataSource={listAdvertisement}
          position={this.state.position}
          onPositionChanged={position => this.setState({ position })}
          containerStyle={{
            backgroundColor:'red'
          }}
          height={120}
        /> */}
        <SliderBox
          ImageComponent={FastImage}
          // imageCurrent = {this._getAdvertisement()}
          images={listAdvertisement}
          sliderBoxHeight={110}
          onCurrentImagePressed={index =>
            console.warn(`image ${index} pressed`)
          }
          parentWidth={width * 0.9}
          dotColor="#FFEE58"
          inactiveDotColor="#90A4AE"
          paginationBoxVerticalPadding={20}
          paginationBoxStyle={{
            position: "absolute",
            bottom: 0,
            padding: 0,
            alignItems: "center",
            alignSelf: "center",
            justifyContent: "center",
            paddingVertical: 5
          }}
          dotStyle={{
            width: 8,
            height: 8,
            borderRadius: 4,
            marginHorizontal: 0,
            padding: 0,
            margin: 0,
            backgroundColor: "rgba(128, 128, 128, 0.92)"
          }}
          circleLoop
        />
      </View>
    );
  }
}

// let { width } = Dimensions.get("window");
// const Slide = ({ style, children, ...props }) => (
//   <View style={[style, styles.container]}>
//       <SliderBox
//         ImageComponent={FastImage}
//         images={listAdvertisement}
//         sliderBoxHeight={110}
//         onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
//         parentWidth={width * 0.9}
//         dotColor="#FFEE58"
//         inactiveDotColor="#90A4AE"
//         paginationBoxVerticalPadding={20}
//         paginationBoxStyle={{
//           position: "absolute",
//           bottom: 0,
//           padding: 0,
//           alignItems: "center",
//           alignSelf: "center",
//           justifyContent: "center",
//           paddingVertical: 5
//         }}
//         dotStyle={{
//           width: 8,
//           height: 8,
//           borderRadius: 4,
//           marginHorizontal: 0,
//           padding: 0,
//           margin: 0,
//           backgroundColor: "rgba(128, 128, 128, 0.92)"
//         }}
//         circleLoop
//       />
//   </View>
// );
export default Slide;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffba00",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    paddingHorizontal: 20,
    height: 120,
    paddingBottom: 10
  },
  image: {
    width: width * 0.9,
    borderRadius: 7
  }
});
