import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const MapScreen = () => {
    return (
        <View>
            <Text>Map Screen</Text>
        </View>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
})