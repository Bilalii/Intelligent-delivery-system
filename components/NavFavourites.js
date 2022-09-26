import React, { Component } from 'react';
import { StyleSheet,Text, View, TouchableOpacity, FlatList } from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'twrnc';
  

    const data = [
        {
        id: "123",
        icon :"home",
        location :"Home",
        destination: "Code Street ,London, UK",
    },
    {
        id: "456",
        icon :"briefcase",
        location :"Work",
        destination: "London Eye ,London, UK",
    },
    ];
    const NavFavourites=()=>{
        return <FlatList data={data} keyExtractor={(item)=> item.id} renderItem =
        {(item)=>(
            <TouchableOpacity>
             <Icon
             
             />
            </TouchableOpacity>
        )} />;

    };

    
  

export default NavFavourites;
const styles= StyleSheet.create({});
