import React from 'react'
import { StyleSheet, Text, View, SafeAreaView,Image } from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { setOrigin, setDestiantion } from '../slices/navSlice';
import { useDispatch } from 'react-redux';
import NavFavourites from '../components/NavFavourites';

const GOOGLE_MAPS_APIKEY = 'AIzaSyAOowTyFVnB6wBWc9R3Al4y3f2W6Lays1Y';

<NavOptions/>
const HomeScreen = () =>{
    const dispatch= useDispatch();

    return (   
        <SafeAreaView style={tw`text-red-500 p-10`}>
            <View style={tw`p-5`}>
                <Image
                style={{
                    width: 100,
                    height: 100, 
                    resizeMode: 'contain',
                    position: 'absolute',
                    right:80,
                    bottom:690,

                }}
                source ={{
                    uri: "https://links.papareact.com/gz",
                }}
                
                />
                <GooglePlacesAutocomplete 
                placeholder='Where to Deliver package ?'
                styles={{
                    container: {
                        padding: 3,
                        flex: 0,
                    },
                    textInput:{
                        fontSize: 16,
                    },
                }}
                onPress={(data, details = null) => {
                    dispatch(
                        setOrigin({
                        location: details.geometry.location,
                        description: data.description
                    })
                    );
                   dispatch(setDestiantion(null));
                }}
                fetchDetails={true}
                returnKeyType= {"search"}
                enablePoweredByContainer= {false}
                minLength={2}
                query={{
                    key: GOOGLE_MAPS_APIKEY,
                    language:'en',
                }}
                nearbyPlacesAPI='GooglePlacesSearch'
                debounce={400}
                />
                <NavOptions/>
            <NavFavourites/>
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;

