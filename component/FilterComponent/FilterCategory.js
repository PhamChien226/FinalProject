import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList} from 'react-native'
// import MiniAddView from '../AddView/MiniAddView'
import categoryElecDev from '../../utils/categoryElecDev';
import CategoryItem from './CategoryItem';

export default class FilterCategory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         listCategory : categoryElecDev
      };
    };

    renderItem =(item) => {
        console.log(item)
        // return (
        //     <MiniAddView data = {item}/>
        // )
    }
    
    render() {  
        return (
            <View style={styles.container}> 
                <FlatList 
                    data={this.state.listCategory}
                    horizontal={true}
                    renderItem={({item,index}) => {
                        return (
                          <CategoryItem
                            item={item}
                            index={index}
                            parentFlatlist={this}
                            refreshCategory={this.props.refreshCategory}
                            key={item.name}
                          ></CategoryItem>
                        );
                    }}
                    keyExtractor = {(item,index) => item.name}
                    showsHorizontalScrollIndicator={false}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        height:70,
        backgroundColor:'white',
        borderRadius:10,
        paddingLeft:10
    }
})
