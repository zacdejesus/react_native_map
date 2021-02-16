import React from 'react';
import { StyleSheet, Dimensions, Button, View } from 'react-native';

export default ({ onPresLeft, textLeft }) => {
    return (
        <View style={styles.Buttons}>
            <Button onPress={onPresLeft} title={textLeft}></Button>
            <Button title='mostrar/ocultar'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    Buttons: {
        flexDirection: 'row',       
        justifyContent: 'center',
        alignItems: 'center',
    }
});