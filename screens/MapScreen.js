import React, { Component } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import tw from 'twrnc';
import Map from '../components/Map';
import MapView from 'react-native-maps';
import { StackActions, useNavigation } from '@react-navigation/native';
import NavigateCard from '../components/NavigateCard';
import { createStackNavigator } from '@react-navigation/stack';
import RideOptionCard from '../components/RideOptionCard';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import NewScreen from '../components/NewScreen';

 
const GOOGLE_MAPS_APIKEY = 'YOUR_API_KEY';

const MapScreen = () =>{
    const stack = createStackNavigator();
    const navigation= useNavigation();
    return (
        <View>
            <TouchableOpacity 
            onPress={()=>navigation.navigate("HomeScreen")}
            style={tw`bg-gray-100 absolute top-16 left-8 z-50 p-3
            rounded-full shadow-lg`}>
                <Icon name="menu"></Icon>
            </TouchableOpacity>
            <Text></Text>
            <View style={tw`h-1/2`}>
                <Map />
            </View >
            <View style={tw`h-1/2`}>
                <stack.Navigator>
                    <stack.Screen
                     name="NavigateCard"
                     component={NavigateCard}
                     options={{
                     headerShown: false,
                  }}
                    />
                     <stack.Screen
                     name="RideOptionCard"
                     component={RideOptionCard}
                     options={{
                     headerShown: false,
                  }}
                    />
                </stack.Navigator>
            </View>
        </View>
    )
}
export default MapScreen;

const styles = StyleSheet.create({})