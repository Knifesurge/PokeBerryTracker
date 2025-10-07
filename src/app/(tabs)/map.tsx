import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <Text>Map Screen</Text>
            </View>
        </SafeAreaView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 20,
        gap: 20
    },
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