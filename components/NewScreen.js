
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import { validate } from 'tcomb-validation';
import Button from '../screens/Button';
import COLORS from '../screens/colors';
const NewScreen = ({navigation}) => {

  return (
 <View>
    <TouchableOpacity style={{width: "60%", margin: 65,marginTop: 170 }}>
          
          <Button  color="black"  title='Without APIKEY'onPress={()=> 
          navigation.navigate('Geolocation')
          }>
          </Button>
        </TouchableOpacity>
      <TouchableOpacity style={{width: "60%", margin: 65,marginTop: -50 }}>
          
          <Button  color="black"  title='Using APIKEY'onPress={()=> 
          navigation.navigate('MapScreen')
          }>
          </Button>
        </TouchableOpacity>     
</View>
  );
};


const styles = StyleSheet.create({
  mainbox:{
    textAlign:'center',
    margin: 0,
    flex: 5,
    justifyContent: 'space-between',
  },
  mapView:{
    flex: 25,
  }
});
export default NewScreen;