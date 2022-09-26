import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { setDestiantion } from "../slices/navSlice";
import { useDispatch } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { Icon } from "react-native-elements";

const GOOGLE_MAPS_APIKEY = 'YOUR_API_KEY';

const NavigateCard =() =>{
const dispatch= useDispatch();
const navigation= useNavigation();
 return(
     <SafeAreaView style={tw`bg-white flex-1`}>
         <Text style={tw`text-center py-5 text-xl font-bold` }>Welcome, Bilal Good Morning!</Text>
     <View style={tw`border-t border-gray-200 flex-shrink`}>
         <View>
             <GooglePlacesAutocomplete 
             placeholder="Select place to deliver package..!"
             styles={toInputBoxStyles}
             fetchDetails={true}
             returnKeyType={"search"}
             minLength={2}
             onPress={(data, details= null)=>{
                 dispatch(
                    setDestiantion({
                    location: details.geometry.location,
                    description: data.description,
                 })
                 
                 )
                 navigation.navigate('RideOptionCard');
             }}
             enablePoweredByContainer={false}
             query={{
                 key: GOOGLE_MAPS_APIKEY,
                 language: 'en'
             }}
             nearbyPlacesAPI="GooglePlacesSearch"
             debounce={400}
             />
         </View>
        </View>
        <View style={tw`flex-row bg-white justify-between justify-evenly py-2  border-t border-gray-100 top-20`}>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("RideOptionCard")}
            style={tw`flex flex-row bg-black w-24 px-4 py-3 rounded-full`}>
             <Icon name="car" type="font-awesome" color="white" size={16}/>
             <Text style={tw`text-white text-center`}> Deliver</Text>   
            </TouchableOpacity>

            <TouchableOpacity 
            onPress={()=>navigation.navigate("LiveChat")}
            style={tw`flex flex-row bg-cyan-300 justify-between w-24 px-4 py-3 rounded-full` }>
             <Icon name="chatbubbles-outline" 
             type="ionicon" color="black" 
             size={16}/>
             <Text style={tw`text-center text-black`}>Chat </Text>  

            </TouchableOpacity>
     </View>

     </SafeAreaView>     
 );
};

export default NavigateCard;
const toInputBoxStyles= StyleSheet.create({
    container: {
        backgroundColor: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 0,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    },
});