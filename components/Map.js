import React, { useState } from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions } from 'react-native';

export default ({ press }) => {


  return (
    <MapView
      style={styles.maps}
      onLongPress={press}
    />
  )
}

const styles = StyleSheet.create({
  maps: {
    height: Dimensions.get("window").height - 150,
    width: Dimensions.get("window").width
  }
});