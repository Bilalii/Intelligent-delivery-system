import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Stack,Image,Button,SafeAreaView  }
 from 'react-native';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { store } from './store';
import MapScreen from './screens/MapScreen';
import StarRating from './screens/StarRating';
import ParcelDescription from './screens/ParcelDescription';
import CameraScreen from './screens/CameraScreen';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import React, {useState} from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import LoginScreen from './screens/LoginScreen';
import RegistrationScreen from './screens/RegisterationScreen';
import Chat from './screens/LiveChat';
import EatScreen from './screens/EatScreen';
import MyAppScreen from './screens/MyAppScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NewScreen from './components/NewScreen';
import Geolocation from './screens/Geolocation';


const stack = createStackNavigator();

export default function App() 
   {
    const [initialRouteName, setInitialRouteName] = React.useState('');

    React.useEffect(() => {
      setTimeout(() => {
        authUser();
      }, 2000);
    }, []);
  
    const authUser = async () => {
      try {
        let userData = await AsyncStorage.getItem('userData');
        if (userData) {
          userData = JSON.parse(userData);
          if (userData.loggedIn) {
            setInitialRouteName('HomeScreen');
          } else {
            setInitialRouteName('LoginScreen');
          }
        } else {
          setInitialRouteName('RegistrationScreen');
        }
      } catch (error) {
        setInitialRouteName('RegistrationScreen');
      }
    }


    const [showRealApp, setShowRealApp] = useState(false);
   
    const onDone = () => {
      setShowRealApp(true);
    };
    const onSkip = () => {
      setShowRealApp(true);
    };
    const RenderItem = ({item}) => {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: item.backgroundColor,
            alignItems: 'center',
            justifyContent: 'space-around',
            paddingBottom: 100,
          }}>
          <Text style={styles.introTitleStyle}>
            {item.title}
          </Text>
          <Image
            style={styles.introImageStyle}
            source={item.image} />
          <Text style={styles.introTextStyle}>
            {item.text}
          </Text>
        </View>
      );
    };
    
    return (
      <>
        {showRealApp ? (
          
            <Provider store={ store }>
        <NavigationContainer>
          
          <SafeAreaProvider>
           
            <>
            <stack.Navigator>
            <stack.Screen 
              name='RegistrationScreen' 
              component={RegistrationScreen}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='LoginScreen' 
              component={LoginScreen}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='MyAppScreen' 
              component={MyAppScreen}
              options={{
                headerShown: false,
              }}
              />
            <stack.Screen 
              name='StarRating' 
              component={StarRating}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='ParcelDescription' 
              component={ParcelDescription}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='Camera Screen' 
              component={CameraScreen}
              options={{
                headerShown: true,
              }}
              />
              <stack.Screen 
              name='HomeScreen' 
              component={HomeScreen}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='MapScreen' 
              component={MapScreen}
              options={{
                headerShown: false,
              }}
              />
               <stack.Screen 
              name='LiveChat' 
              component={Chat}
              options={{
                headerShown: false,
              }}
              />
              <stack.Screen 
              name='EatScreen' 
              component={EatScreen}
              options={{
                headerShown: false,
              }}
              />
               <stack.Screen 
              name='NewScreen' 
              component={NewScreen}
              options={{
                headerShown: true,
              }}
              />
               <stack.Screen 
              name='Geolocation' 
              component={Geolocation}
              options={{
                headerShown: false,
              }}
              />
            </stack.Navigator>
            </>
          
            {/*<HomeScreen />*/}
          </SafeAreaProvider>
          
        </NavigationContainer>
             
      </Provider>

        ) : (
          <AppIntroSlider
            data={slides}
            renderItem={RenderItem}
            onDone={onDone}
            showSkipButton={true}
            onSkip={onSkip}
            bottomButton
          />
        )}
      </>
    );
  };
  

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 10,
    justifyContent: 'center',
  },
  titleStyle: {
    padding: 10,
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  paragraphStyle: {
    padding: 20,
    textAlign: 'center',
    fontSize: 16,
  },
  introImageStyle: {
    width: 300,
    height: 240,
  },
  introTextStyle: {
    fontSize: 18,
    color: 'white',
    textAlign: 'center',
    paddingVertical: 30,
  },
  introTitleStyle: {
    fontSize: 25,
    color: 'white',
    textAlign: 'center',
    marginBottom: 16,
    fontWeight: 'bold',
  },
});

const slides = [
  {
    key: 's1',
    text: 'Best Reliable Delivery App',
    title: 'Best User Experience',
    image: require('./assets/onboardScreen1.png'),
    backgroundColor: '#00ced1',
  },
  {
    key: 's2',
    title: 'Fast Delivery of package',
    text: 'Upto 20% off on yout first delivery',
    image: require('./assets/onboardScreen3.png'),
    backgroundColor: '#000',
  },
  {
    key: 's3',
    title: 'App updates',
    text: 'Updates itself automatically when required',
    image: require('./assets/onboardScreen2.png'),
    backgroundColor: '#ff7f50',
  },
];