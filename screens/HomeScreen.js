import React, { Component } from "react";
import { StyleSheet, View, Dimensions,ScrollView } from "react-native";
import Text from '../components/CustomText'
import { FeedItem, Search } from "../component";
import dataCategory from "../utils/dataHome";
import Slide  from "../component/Slide";
import LogoComponent from '../component/Header/LogoComponent'
import ListAdInterestHorizontal from "../containers/ListAdInterestHorizontal";
import ButtonReadMore from '../components/ButtonReadMore'

let{width} = Dimensions.get('window')
export default class HomeScreen extends Component {
constructor(props) {
  super(props)

  this.state = {
    fontLoaded:true,
    isReadMore: false,
  };
};

  async  componentWillMount() {
    this.setState({fontLoaded :true})
  }
  updateSearch = text => {
    // xử lý kết quả search ở đây
  };

  readMore =()=> {
    this.setState({
      isReadMore:true
    })
  }
  readLess =()=> {
    this.setState({
      isReadMore:false
    })
  }
  renderCateItem =()=> {
    // const { isReadMore } = this.props.dashBoardState; 
    const { isReadMore } = this.state; 
    let newData = [];
    if (!isReadMore) {
      newData = dataCategory.slice(0, 6);
      return (
        <View>
          <View style={styles.categoryWrapper}>
            {newData.map((item, index) => {
              return <FeedItem item={item} index={index} key={item.key} />;
            })}
          </View>
          <ButtonReadMore contentText="Xem thêm" amount={8} 
          // onPress= {this.props.onClickReadMore()}
          onPress= {this.readMore}
          />
        </View>
      );
    } 
    else{ 
      newData = dataCategory;
      return (
        <View>
          <View style={styles.categoryWrapper}>
            {newData.map((item, index) => {
              return <FeedItem item={item} index={index} key={item.key} />;
            })}
          </View>
          {/* <ButtonReadMore
            contentText="Thu gọn"
            nameIcon="caretup"
            //  onPress= {this.props.onClickReadLess()}
            onPress={this.readLess}
            styleIcon={{paddingTop:8}}
          /> */}
        </View>
      );
    } 
    // return newData;
    
  }

  render() {
    const {fontLoaded,isReadMore} =  this.state;
 return (
   <View style={styles.container}>
     <LogoComponent />
     <Search
       updateSearch={this.updateSearch}
       textplace={"Bạn cần tìm gì hôm nay..."}
       style={styles.search}
     />
     <ScrollView>
       <View style={styles.scrollViewContainer}>
         <Slide/>
         <ListAdInterestHorizontal />

         {fontLoaded ? (
           <Text
             style={{
               marginLeft: 10,
               paddingVertical: 10,
               fontWeight: "800",
               fontFamily: "sf-font-pro"
             }}
           >
             Khám Phá Danh Mục
           </Text>
         ) : (
           <Text></Text>
         )}
         <View style={styles.categoryWrapper}>
           {this.renderCateItem()}
         </View>
       </View>
     </ScrollView>
   </View>
 ); 
  }
}

HomeScreen.navigationOptions = {
  header: null,
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    backgroundColor:"#ffba00",
    paddingTop:30
  },
  search:{
    width:width*0.9
  },
  scrollViewContainer:{
    flex: 1,
    alignContent: "center",
    backgroundColor:"white"
  },
  textGuild: {
    marginLeft: 10,
    paddingVertical:10,
    fontWeight:"800",
    fontFamily:'sf-font-pro'
    
  },
  categoryWrapper: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
});
