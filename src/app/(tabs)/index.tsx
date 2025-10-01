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

    return (
        <View>
            
            <FlatList
                data={routeBoxes}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => <RouteBoxComponent />}
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
        justifyContent: 'center'
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    routeButton: {
        fontSize: 18,
        alignItems: 'center',
        justifyContent: 'center',
    }
})