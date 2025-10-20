import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import BoxFeed from '@/src/features/boxes/components/BoxFeed';
import mockData from '@/src/mockdata/MockData.json';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const routes = mockData[0].routes;
const berries = mockData[1].berries;

const IndexScreen = () => {
    const router = useRouter();
    const [isNavigating, setisNavigating] = useState(false);

     const handleAddBox = () => {
        if (isNavigating) return; // Prevent multiple navigations
        setisNavigating(true);
        router.push('/(boxes)/createbox');

        setTimeout(() => setisNavigating(false), 500); // Reset after a short delay
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>

                <BoxFeed />

                <Text style={styles.routeButton} onPress={handleAddBox}>Add Box</Text>
            </View>
        </SafeAreaView>
    )
}

export default IndexScreen;

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
    },
    list: {
        marginTop: 20,
        width: "auto",
        alignSelf: "center",
    },
    listContent: {
        justifyContent: "center"
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    routeButton: {
        fontSize: 18,
        alignSelf: 'center',
        backgroundColor: 'lightgrey',
        borderColor: "#25292e",
        borderRadius: 10,
        padding: 10
    }
})