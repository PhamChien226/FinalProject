import React, { Component } from 'react'
import { Text} from 'react-native'

export default class  CustomText extends Component {
    render() {
        return (
          <Text 
          {...this.props} 
          style={[this.props.style, { fontFamily: 'sf-font-pro' }]}/>
        //     {this.props.children}
        //   </Text>
        );
    }
}

