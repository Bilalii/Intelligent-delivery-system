import React from "react";
import { View,Text,StyleSheet } from "react-native";
import {WebView} from "react-native-webview";




const Chat =() => {
    return(
        <View style={{ flex:1}}>
            <WebView source={{uri:"https://chattusa.com/chat.php"}} />
        </View>       
   );
};
export default Chat;
const styles = StyleSheet.create({
  
});