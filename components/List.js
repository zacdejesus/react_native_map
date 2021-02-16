import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text, FlatList, Button } from 'react-native';

export default ( {closeModal, puntos} ) => {
    return (
    <>
        <View style={styles.list} >
            <FlatList 
                keyExtractor={item => item}
                renderItem={({item}) => <View style={styles.item}><Text>{item}</Text></View> }
                data={puntos.map( x => x.name )}
            />
        </View>
        <View>
            <Button title='cerrar' onPress={closeModal} />
        </View>
    </>
    )
}

const styles = StyleSheet.create({
    list: {
        height: Dimensions.get('window').height - 350,
        borderRadius: 20 
    },
    item: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 10
    },
});
