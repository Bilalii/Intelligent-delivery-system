import React from "react";
import { FlatList, Text, View,Image } from "react-native";
import { TouchableOpacity } from "react-native";
import tw from 'twrnc';
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import EatScreen from "../screens/EatScreen";
import NewScreen from "./NewScreen";


const data= [
    {
        id: "123",
        titles:" Deliver Package",
        image:"https://links.papareact.com/3pn",
        screen: "MapScreen",

    },
    {
        
       
        id: "456",
        titles:" Order Food",
        image:"https://links.papareact.com/28w",
        screen: "EatScreen",
        
    },
]

const NavOptions = () => {

    const navigation = useNavigation();
    const origin = useSelector(selectOrigin);
    return(
        <FlatList
        data={data}
        vertical
        keyExtractor={(item) => item.id}
        renderItem= {({item})=>(
            <TouchableOpacity 
            onPress={()=> navigation.navigate(item.screen)}
            style={tw`p-4 pl-7 pb-8 pt-7 bg-red-300 bg-stone-300 m-1 w-70`}
            disabled={!origin}
            >      
            <TouchableOpacity 
            onPress={()=> navigation.navigate(EatScreen)}
            > 
            </TouchableOpacity>
               <View style={tw`${!origin && "opacity-20"}`}>
                   <Image
                   style={{width:180 ,height: 130, resizeMode: "contain"}}
                   source={{ uri:item.image}}
                   />
                   <Text style ={tw`mt-3 text-lg font-bold`}>{item.titles}</Text>
                   <Icon
                   style={tw`p-1 bg-black rounded-full w-15 mt-4 pl-2`} 
                   name="arrowright" 
                   color="white" 
                   type="antdesign"/>
               </View>
             
            </TouchableOpacity>
            
        )}
      />
    )
   };

export default NavOptions;