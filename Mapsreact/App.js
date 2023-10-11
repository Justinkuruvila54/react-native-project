import React, { useEffect, useState } from "react";
import { PermissionsAndroid,Text } from "react-native";
import MapView, { PROVIDER_GOOGLE , Marker} from 'react-native-maps';
import Geolocation from 'react-native-geolocation-service';

function App(){
  const[Location,setLocation]=useState({latitude:0,longitude:0})
  async function getPermission(){
    await PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
    )
  }
  useEffect(()=>{
    getPermission().then(()=>{

      Geolocation.getCurrentPosition(
        (position) => {
         setLocation( {latitude: position.coords.latitude, longitude: position.coords.longitude})
        },
        (error) => {
          // See error code charts below.
          console.log(error.code, error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );

    })
    
  
  },[]);
  return(
    <MapView
    provider={PROVIDER_GOOGLE} // remove if not using Google Maps
    style={{flex:1}}
    region={{
      latitude: Location.latitude,
      longitude: Location.longitude,
      latitudeDelta: 0.015,
      longitudeDelta: 0.0121,
    }}
  >
    <Marker
  coordinate={{latitude: 37.78825, longitude: -122.4324}}
  
/>
  </MapView>
  )
}
export default App;