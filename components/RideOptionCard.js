import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import tw from 'twrnc';
import { TouchableOpacity } from "react-native";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native";
import { Image } from "react-native";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectTravelTimeInformation } from "../slices/navSlice";


 
const data= [
    {
        id:"Safe-car-123",
        title:"Mini Machine",
        multiplier: 0.4,
        image: "https://links.papareact.com/3pn",
        
    },
    {
        id:"Batman-234",
        title:"Safe Machine",
        multiplier: 0.7,
        image: "https://links.papareact.com/5w8",
    },
    
    {
        id:"Lovely-vahicle-432",
        title:"Fast Machine",
        multiplier: 1.2,
        image: "https://links.papareact.com/7pf",
    },
];

const SURGE_CHARGE_RATE= 0.2;


const RideOptionCard =() =>{
    const navigation=  useNavigation();
    const[selected, setSelected]= useState(null);
    const TravelTimeInformation = useSelector(selectTravelTimeInformation);
    const travelConst = (item) => {
        return ((TravelTimeInformation?.duration?.value * SURGE_CHARGE_RATE * item?.multiplier) / 100 * 234).toFixed(2)
    }
    return(
        <SafeAreaView style={tw`bg-white flex-grow `}
        
        >
            <View>
                <TouchableOpacity 
                onPress={()=>navigation.navigate("NavigateCard")}
                style={tw`absolute top-3 left-5 z-50 p-3 rounded-full`}
             >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
            <Text style={tw`text-center py-5 text-lg`}> Select auto-   
            {TravelTimeInformation?.distance?.text}(miles)</Text>
            </View>
            <FlatList data={data} 
            keyExtractor={(item)=> item.id}
            renderItem={({ item: {id , title ,multiplier, image} , item})=>(
           <TouchableOpacity 
           onPress={()=> setSelected(item)}
           style={tw`flex-row justify-between items-center 
                   px-5 ${id === selected?.id && "bg-gray-200"}`}>
                       <Image
                       style={{
                           width: 80,
                           height:60,  
                           resizeMode:"contain",
                       }} 
                       source= {{uri: image}}
                       />
                       <View style={tw`-ml-5`}>
                           <Text style={tw`text-xl font-semibold`}>{title}</Text>
                           <Text style={tw` text-sm `}>{TravelTimeInformation?.duration.text} Travel Time
                         </Text>
                       </View>
                       <Text style={tw`text-sm font-semibold`}>
                       PKR {travelConst(item)}
                       </Text>
                   </TouchableOpacity>
               )}
            />
            <View style={ tw`mt-auto border-t border-gray-200`}>
                <TouchableOpacity disabled={!selected} style={tw`bg-black py-3 m-6 
                ${!selected && "bg-gray-300"}`}  >
                    <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};
export default RideOptionCard;
const styles= StyleSheet.create({});
