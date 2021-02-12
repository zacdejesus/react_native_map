import React, { useState } from 'react';
import { Dimensions, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Map, Modal, Panel, Input } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState()
  const [visibility, setVisibility] = useState({})
  const [puntoTemp, setpuntoTemp] = useState()

  const handleLongPress = ({ nativeEvent }) => {
    setpuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  return (
    <SafeAreaView style={styles.container}>
      <Map press={handleLongPress} />
      <Modal visibility={visibility}>
        <Input title="nombre del punto" placeholder="" onChageText={ text => {setNombre(text)}} /> 
      </Modal>
      <Panel />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
