import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform,TouchableOpacity,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

export default function ImagePickerExample({navigation}) {
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
   
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [2, 3],
      quality: 1,
    });
    console.log(result);
   
    if (!result.cancelled) {
      setImage(result.uri);
    }

  };




  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Place the Image" onPress={pickImage} />
      {image && <Image source={{ uri: image }} style={{ width: 300, height: 300,marginTop:20 }} />}
      <TouchableOpacity style={{ height: 50, marginTop: 30, width: "50%", margin: 60  }}>
      <Button style ={styles.bluebutton} color="black"  title='Submit Information'onPress={()=> 
          navigation.navigate('HomeScreen')
          }></Button>
          </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
    bluebutton:{
        color: 'black',
        height: 40,
        borderColor: "gray",
        borderWidth: 0.5
    },
  
});