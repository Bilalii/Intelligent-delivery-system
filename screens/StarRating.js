import React, {useState} from 'react';


// import all the components we are going to use
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Button,
} from 'react-native';

 


const StarRating = ({navigation}) => {
  // To set the default Star Selected
  const [defaultRating, setDefaultRating] = useState(2);
  // To set the max number of Stars
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
 
  // Filled Star. You can also give the path from local
  const starImageFilled =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_filled.png';
  // Empty Star. You can also give the path from local
  const starImageCorner =
    'https://raw.githubusercontent.com/AboutReact/sampleresource/master/star_corner.png';
 
  const CustomRatingBar = () => {
    return (
      <View style={styles.customRatingBarStyle}>
        {maxRating.map((item, key) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}>
              <Image
                style={styles.starImageStyle}
                source={
                  item <= defaultRating
                    ? {uri: starImageFilled}
                    : {uri: starImageCorner}
                }
              />
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };
 
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.titleText}>
          
        </Text>
        <Text style={styles.textStyle}>
          How was your experience with us
        </Text>
        <Text style={styles.textStyleSmall}>
          Please Rate Us
        </Text>
        {/* View to hold our Stars */}
        <CustomRatingBar />
        <Text style={styles.textStyle}>
          {/* To show the rating selected */}
          {defaultRating} / {Math.max.apply(null, maxRating)}
        </Text>
        <View>
        <TouchableOpacity style={{width: "60%", margin: 65,marginTop: 20 }}>
          
          <Button  color="black"  title='Submit Response'onPress={()=> 
          navigation.navigate('ParcelDescription')
          }>
          </Button>
        </TouchableOpacity>
        </View>
      </View>

    </SafeAreaView>
  );
};
 
export default StarRating;
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    justifyContent: 'center',
    textAlign: 'center',
  },
  titleText: {
    padding: 12,
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 25,
    color: '#000',
    marginTop: 30,
    marginBottom:1,
  },
  textStyleSmall: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000',
    marginTop: 17,
  },
  customRatingBarStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 15,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },

});