import AsyncStorage from '@react-native-async-storage/async-storage';
import { TouchableOpacity } from 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import Button from './Button';
const MyAppScreen = ({navigation}) => {
  const [userDetails, setUserDetails] = React.useState();
  React.useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    const userData = await AsyncStorage.getItem('userData');
    if (userData) {
      setUserDetails(JSON.parse(userData));
    }
  };

  const logout = () => {
    AsyncStorage.setItem(
      'userData',
      JSON.stringify({...userDetails, loggedIn: false}),
    );
    navigation.navigate('LoginScreen');
  };

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 40,
        marginTop:30,
      }}>
      <Text style={{fontSize: 20, fontWeight: 'bold',marginBottom: 15}}>
        Welcome!! {userDetails?.fullname}
      </Text>
      <Button title="Proceed Next" onPress={()=> 
          navigation.navigate('StarRating')} />
      <Button title="Logout" onPress={()=>navigation.navigate("RegistrationScreen")} />
          
    </View>
  );
};

export default MyAppScreen;