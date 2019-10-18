import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList,AsyncStorage,ActivityIndicator} from 'react-native'
import MiniAddView from '../AddView/MiniAddView'
import ListProductsInterest from '../../utils/ListProductsInterest'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {withNavigation} from 'react-navigation'

class ProductsListInterest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        ListProducts: ListProductsInterest,
        list_ads_interest: [],
        isLoading: false
      };
    };

    componentDidMount=()=>{
        this.callAPI()
      }
    callAPI = async () => {
        try {
          const { list_ads_interest } = this.state;
          this.setState({isLoading:true})
          const fingerprint = await AsyncStorage.getItem('@fingerprint')
          const response = await fetch(
            `https://chotot-recommendersys.appspot.com/general-recommend?user_fingerprint=${fingerprint}`
          );
          const dataJson = await response.json();
        //   console.log("Call API Interest") 
        //   console.log(dataJson.ads)
          this.setState({
            isLoading:false,
            list_ads_interest: list_ads_interest.concat(dataJson.ads),
          });
        } catch (error) {}
      };
      
      renderFooter = () => {
        const { isLoading} = this.state;
          return <ActivityIndicator size="large" animating={isLoading} />;
      };

    renderItem =(item) => {
        console.log(item)
    }
    
    render() {
        const {list_ads_interest,isLoading} = this.state
    
        if(isLoading) return this.renderFooter();
        else
        return (
            <View style={styles.container}> 
            <View style={{flexDirection:'row',justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{fontWeight:'800',paddingTop:5}}>Có thể bạn quan tâm </Text>
                <TouchableOpacity 
                    onPress={()=>{
                        // alert('You Onpress')
                        this.props.navigation.navigate('Interest')
                    }}
                >
                    <Text style={styles.textExtra}>Xem thêm</Text>
                </TouchableOpacity>
            </View>
                <FlatList 
                    data={list_ads_interest}
                    horizontal={true}
                    renderItem={({item,index}) => {
                        return (
                            <MiniAddView item={item} index ={index} parentFlatlist={this}>

                            </MiniAddView>
                        )
                    }}
                    keyExtractor = {(item,index) => item.title}
                    showsHorizontalScrollIndicator={false}
                    // style={{}}
                />
            </View>
        )
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
