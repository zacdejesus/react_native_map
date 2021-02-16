import React, { useState } from 'react';
import { Button, SafeAreaView, StyleSheet, Text } from 'react-native';
import { Map, Modal, Panel, Input, List } from './components';

export default function App() {
  const [puntos, setPuntos] = useState([])
  const [nombre, setNombre] = useState('')
  const [visibilityAux, setVisibilityAux] = useState('new_punto')
  const [visibility, setVisibility] = useState({})
  const [puntoTemp, setpuntoTemp] = useState()
  const [pointsFilter, setpointsFilter] = useState(true)
  
  const togglePointsFilter = () => {
    
  }

  const handleLongPress = ({ nativeEvent }) => {
    setVisibilityAux('new_punto')
    setpuntoTemp(nativeEvent.coordinate)
    setVisibility(true)
  }

  const handleSubmit = () => {
    const newPunto = { coordinate: puntoTemp, name: nombre }
    setPuntos([...puntos, newPunto])
    setVisibility(false)
    setNombre('')
  }

  const handleLista = () => {
    setVisibilityAux('all_puntos')
    setVisibility(true)
  }
  const closeModal = () => {
    7
  }

  return (
    <SafeAreaView style={styles.container}>
      <Map press={handleLongPress} puntos={puntos} />
      <Panel onPresLeft={handleLista} textLeft='Lista'/>
      <Modal visibility={visibility}>
        {visibilityAux === "new_punto" ? 
        <>
          <Input title="nombre del punto" placeholder="" onChangeText={text => setNombre(text)} />
          <Button title="Aceptar" onPress={handleSubmit}></Button>
        </> :
          <List puntos={puntos} closeModal={ () => {setVisibility(false) }}/>
        }
      </Modal>
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
