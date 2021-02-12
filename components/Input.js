import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

export default ({ title, ...rest }) => {
    return (
        <View style={styles.wraper}>
            <Text>{title}</Text>
            <TextInput {...rest} style={styles.textInput}/>
        </View>
    )
}

const styles = StyleSheet.create({
    wraper: {
        height:40
    },
    textInput: {
        flex: 1
    }
})