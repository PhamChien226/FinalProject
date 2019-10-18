import React from 'react'
import {
  AntDesign,
  SimpleLineIcons,
  Entypo,
  MaterialCommunityIcons,
  Ionicons
} from "@expo/vector-icons";
export default categoryElecDev=[
    {
        key:'1',
        name:"Điện Thoại",
        id_mobile_category:'5010',
        icon:<SimpleLineIcons name="screen-smartphone" size={27} color='#797979'/>
    },
    {
        key:'2',
        name:'Máy Tính Bảng',
        id_mobile_category:'5040',
        icon:<Ionicons name="ios-tablet-landscape" size={27} color="#797979"/>
    },
    {
        key:'3',
        name:'Laptop',
        id_mobile_category:"5030",
        icon:<Entypo name="laptop" size={27} color="#797979"/>
    },
    {
        key:'3',
        name:'Máy Tính Để Bàn',
        id_mobile_category:'5070',
        icon:<MaterialCommunityIcons name="desktop-tower-monitor" size={27} color="#797979"/>
    },
    {
        key:'4',
        name:'camera',
        id_mobile_category:'5050',
        icon:<Entypo name="camera" size={27} color="#797979"/>
    },
]