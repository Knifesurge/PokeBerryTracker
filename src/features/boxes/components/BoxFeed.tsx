import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

import { RootState } from '../store/pokeStore';
import RouteBox from './BoxComponent';

const BoxFeed = () => {
    const routeBoxes = useSelector((state: RootState) => state.boxes.items);

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={routeBoxes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <RouteBox data={item} />}
                />
            </View>
        </SafeAreaView>
    );
};

export default BoxFeed;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 20,
    },
    list: {
        flex: 1,
    },
    listContent: {
        paddingBottom: 20,
    },
});