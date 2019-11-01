import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList,AsyncStorage,ActivityIndicator} from 'react-native'
import MiniAddView from '../AddView/MiniAddView'
import ListProductsInterest from '../../utils/ListProductsInterest'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'
import MiniAdViewContainer from '../../containers/MiniAdViewContainer'

class ProductsListInterest extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  componentDidMount = async () => {
    await this.props.callAPIGetAdRecommand();
  };

  renderFooter = () => {
    return <ActivityIndicator size="large" animating={true} />;
  };

  render() {
    const { list_ads_interest, isLoading } = this.props.recommand;

    if (isLoading) return this.renderFooter();
    else
      return (
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <Text style={{ fontWeight: "800", paddingTop: 5 }}>
              Có thể bạn quan tâm{" "}
            </Text>
            <TouchableOpacity
              onPress={() => {
                // alert('You Onpress')
                this.props.navigation.navigate("Interest");
              }}
            >
              <Text style={styles.textExtra}>Xem thêm</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={list_ads_interest}
            horizontal={true}
            renderItem={({ item, index }) => {
              return (
                <MiniAdViewContainer
                  item={item}
                  index={index}
                  parentFlatlist={this}
                ></MiniAdViewContainer>
              );
            }}
            keyExtractor = {(item,index) => item.adlist_id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      );
  }
}
export default withNavigation(ProductsListInterest);

const styles = StyleSheet.create({
    container:{
        height:180,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:10
    },
    textExtra:{
        fontSize:15,
        fontWeight:"bold",
        color:"orange",
        paddingRight:20,
        paddingTop:5
    }
})
