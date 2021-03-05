import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps

export default () => (
   <View style={styles.container}>
     <MapView
       provider={PROVIDER_GOOGLE} // remove if not using Google Maps
       style={styles.map}
       region={{
        //  tọa độ và kinh độ ở đây là lấy ở nhà Lê Văn Hiếu
        //  tọa độ
         latitude: 18.9535021,
        //  kinh độ
         longitude: 105.5242540,
        //  độ phóng của tọa độ và kinh độ
         latitudeDelta: 0.015,
         longitudeDelta: 0.0121,
       }}
     >
     </MapView>
   </View>
);
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height: 400,
    // width: 400,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
 });