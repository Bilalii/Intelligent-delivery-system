import React, { Component } from "react";
import { View,StyleSheet} from 'react-native';
import { Provider ,Appbar,Card} from 'react-native-paper';
import MapView ,{Marker,Polyline} from 'react-native-maps';

const Geolocation = () => {

  const [coordinates] = React.useState([
    {
      latitude: 31.4517,
      longitude: 74.2937,
    },
    {
      latitude: 31.4312,
      longitude: 74.2644,
    },
   
   
  ]);

  const _goBack = () => console.log('Went back');

  const _handleSearch = () => console.log('Searching');

  const _handleMore = () => console.log('Shown more');

  return (
    <Provider>
    <Appbar.Header style={styles.header}>
      <Appbar.BackAction onPress={_goBack} />
      <Appbar.Content title="Map Screen" subtitle="Searched Area" />
      <Appbar.Action icon="magnify" onPress={_handleSearch} />
      <Appbar.Action icon="dots-vertical" onPress={_handleMore} />
    </Appbar.Header>
      <View style={styles.mainbox}>
          <MapView
            style={styles.mapView}
            initialRegion={{
            latitude: 31.4517,
            longitude: 74.2937,
            latitudeDelta: 0.0322,
            longitudeDelta: 0.0321,
          }}
          >
            <Marker coordinate={coordinates[0]} />
            <Marker coordinate={coordinates[1]} />
             <Polyline
              coordinates={coordinates}
              strokeColor="#000"
              strokeColors={['#7F0000']}
              strokeWidth={3}
             />
          </MapView>
      </View>
    </Provider>
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
export default Geolocation;