import React from 'react';
import { Dimensions, Image, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');
const aspectRatio = 640 / 344; // Original image aspect ratio
const height = width / aspectRatio;

const MapScreen = () => {
    return (
        <SafeAreaView style={styles.container}>
                <Text>Map Screen</Text>
                <Image // Placeholder for map image
                    source={require("@/assets/images/sinnoh-region-map.png")}
                    style={[styles.image, { width, height }]}
                    resizeMode="cover"
                />
        </SafeAreaView>
    )
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000"
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        flex: 1,
        width: "100%",
        height: "100%",
    }
})