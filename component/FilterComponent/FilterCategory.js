import React, { Component } from 'react'
import { Text, StyleSheet, View ,FlatList} from 'react-native'
// import MiniAddView from '../AddView/MiniAddView'
import categoryElecDev from '../../utils/categoryElecDev';
import CategoryItem from './CategoryItem';
import FilterCategoryContainer from '../../containers/FilterCategoryContainer';

export default class FilterCategory extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         listCategory : categoryElecDev
      };
    };

    renderItem =(item) => {
    }
    
    render() {  
        return (
            <View style={styles.container}> 
                <FlatList 
                    data={this.state.listCategory}
                    horizontal={true}
                    renderItem={({item,index}) => {
                        return (
                          <FilterCategoryContainer
                            item={item}
                            index={index}
                            key={item.name}
                          ></FilterCategoryContainer>
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
        // height:70,
        backgroundColor:'white',
        // borderRadius:10,
        // paddingLeft:10
    }
})
