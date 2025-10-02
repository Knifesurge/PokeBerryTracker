import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import { RouteBox } from '../constants/types';
import RouteBoxComponent from '../features/components/RouteBox';

const IndexScreen = () => {
    const [routeBoxes, setRouteBoxes] = useState<RouteBox[]>([]);

    const handleAddRouteBox = () => {
        setRouteBoxes((prev) => [
            ...prev,
            {
                id: Date.now().toString(),
                route: null,
                berries: Array(4).fill(null).map((_, i) => ({
                    id: `b${i}`,
                    berry: null
                }))
            }
        ]);
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
        <View>
            
            <FlatList
                style={styles.list}
                contentContainerStyle={styles.listContent}
                data={routeBoxes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RouteBoxComponent data={item} onDelete={() => handleDelete(item.id)} onSelectBerry={handleSelectBerry} onSelectRoute={handleSelectRoute}/>}
            />

            <TouchableOpacity activeOpacity={0.8} onPress={handleAddRouteBox}>
                <Text style={styles.routeButton}>Add new Route</Text>
            </TouchableOpacity>
        </View>
    )
}

export default IndexScreen;

const styles = StyleSheet.create({
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