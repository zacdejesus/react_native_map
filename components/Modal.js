import React from 'react';
import { StyleSheet, Dimensions, Modal, View, Text } from 'react-native';

export default ( {children, visibility} ) => {
    return (
        <Modal
            animationType='slide'
            transparent={true}
            visible={visibility}
        >
            <View style={styles.center} >
                <View style={styles.modal}>
                    {children}
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    modal: {
        backgroundColor: '#fff',
        borderRadius: 4,
        padding: 20,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 3
        }
    },
});
