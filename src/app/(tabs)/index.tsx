import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import RouteBoxComponent from '@/src/components/RouteBox';
import { RouteBox } from '@/src/constants/types';
import SearchableSelector from '@/src/features/routeselector/SearchableSelector';

import mockData from '@/src/mockdata/MockData.json';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
const routes = mockData[0].routes;
const berries = mockData[1].berries;

const IndexScreen = () => {
    const router = useRouter();
    const [routeBoxes, setRouteBoxes] = useState<RouteBox[]>([]);

    const handleAddBox = () => {
        router.push('/(boxes)/createbox');
    };

    

    const handleSelectBerry = () => {
        console.log("Berry selected");
    };

    const handleSelectRoute = () => {
        console.log("Route selected");
    };

    const handleDelete = (idToDelete: string) => {
        console.log(`Delete item: ${idToDelete}`);
        setRouteBoxes((prev) => prev.filter(item => item.id !== idToDelete));
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <SearchableSelector
                    options={routes!}
                    onSelect={(val) => console.log(`Selected: ${val}`)}
                    label="Select Route"
                />
                <SearchableSelector
                    options={berries!}
                    onSelect={(val) => console.log(`Selected: ${val}`)}
                    label="Select Berry"
                />
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={routeBoxes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <RouteBoxComponent data={item} onDelete={() => handleDelete(item.id)} onSelectBerry={handleSelectBerry} onSelectRoute={handleSelectRoute}/>}
                />

                <TouchableOpacity activeOpacity={0.8} onPress={handleAddBox}>
                    <Text style={styles.routeButton}>Add Box</Text>
                </TouchableOpacity>
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