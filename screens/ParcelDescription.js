import React,{useState} from "react";
import { View,Text,StyleSheet,Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { TextInput } from "react-native-gesture-handler";
import AsyncStorage from '@react-native-async-storage/async-storage';



const ParcelDescription =({navigation}) => {
  const [inputs, setInputs] = React.useState({length: '', width: '',weight: '', color: ''});
  const [errors, setErrors] = React.useState({});

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.length) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.width) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (!inputs.weight) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (!inputs.color) {
      handleError('Please input password', 'password');
      isValid = false;
    }
  };

 const handleOnchange = (text, input) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error, input) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

    return(
    <View style = {{backgroundColor: '#a9a9a9', flex: 0}}>
<View style={{
        flex: 1,
        backgroundColor: 'gray',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
</View>
<Text style={{ color: '#000', fontSize: 26, marginBottom: -40, marginTop:60, 
         margin: 70, textAlign: "center", fontWeight: 'bold'  }}>
        PARCEL DETAIL
      </Text>
<View style={{
        width: 290,
        height: 500,
        borderColor: '#000',
        borderWidth: 2,
        marginTop:70,
        marginLeft: 37,
        backgroundColor:'#dcdcdc',
        borderRadius: 10,
        
      }}>
    <View style={{ paddingHorizontal: 39, marginBottom: 16, width: '150%',marginTop: 60,paddingEnd: 39  }}>
        <TextInput
          style ={{height: 50 ,fontWeight :'bold', marginBottom :-8 ,fontSize:20}}
          onChangeText={text => handleOnchange(text, 'length')}
            onFocus={() => handleError(null, 'length')}
          placeholder='Enter length in cm'
          maxLength={3}
          autoCapitalize='none'
          autoCompleteType='email'
          keyboardType='numeric'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      <View style={{ paddingHorizontal: 39, marginBottom: 16, width: '100%',borderColor:'black' }}>
        <TextInput
        style ={{height: 50 ,fontWeight :'bold', marginBottom :-8 ,fontSize:20}}
          icon='key'
          onChangeText={text => handleOnchange(text, 'width')}
            onFocus={() => handleError(null, 'width')}
          placeholder='Enter width in cm'
          maxLength={3}
          keyboardType='numeric'
          autoCompleteType='email'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      <View style={{ paddingHorizontal: 39, marginBottom: 16, width: '100%',borderColor:'black' }}>
        <TextInput
         style ={{height: 50 ,fontWeight :'bold', marginBottom :-8 ,fontSize:20}}
         icon='key'
         onChangeText={text => handleOnchange(text, 'weight')}
            onFocus={() => handleError(null, 'weight')}
         placeholder='Enter weight in kg '
         maxLength={2}
         keyboardType='numeric'
         autoCompleteType='email'
         autoCapitalize='none'
         keyboardAppearance='dark'
         returnKeyType='next'
         returnKeyLabel='next'
        />
        
      </View>
      <View style={{ paddingHorizontal: 39, marginBottom: 16, width: '100%',borderColor:'black' }}>
        <TextInput
        style ={{height: 50 ,fontWeight :'bold', marginBottom :-8 ,fontSize:20}}
          icon='key'
          onChangeText={text => handleOnchange(text, 'color')}
          onFocus={() => handleError(null, 'color')}
          placeholder='Enter package color '
          maxLength={7}
          keyboardType='default'
          autoCompleteType='email'
          autoCapitalize='none'
          keyboardAppearance='dark'
          returnKeyType='next'
          returnKeyLabel='next'
        />
      </View>
      </View>

        <TouchableOpacity style={{ height: 50, marginTop: 30, width: "60%", margin: 60,  }}>
        <Button style ={styles.bluebutton} color="black"  title='Submit Information'onPress={()=> 
          navigation.navigate('Camera Screen')
          }>
          </Button>
          </TouchableOpacity>
    </View>
        
   );
};


export default ParcelDescription;
 

 
const styles = StyleSheet.create({
    bluebutton:{
        color: 'black',
        height: 40,
        borderColor: "gray",
        borderWidth: 0.5
    },
  
});