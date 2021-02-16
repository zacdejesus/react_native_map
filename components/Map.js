import React, { useState } from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({ press, puntos }) => {


  return (
    <MapView
      style={styles.maps}
      onLongPress={press}
    >
      {puntos.map(x =>
        <Marker
          key={x.name}
          title={x.name}
          coordinate={x.coordinate}
        />)}
    </MapView>
  )
}

const styles = StyleSheet.create({
  maps: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width
  }
});