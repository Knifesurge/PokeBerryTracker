import React from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import BoxComponent from '@/src/features/boxes/components/BoxComponent';
import { Box, BoxesState } from '@/src/features/boxes/store/types';

import { addBerry, removeBox } from '@/src/features/boxes/store/boxesSlice';
import mockData from '@/src/mockdata/MockData.json';
import { useRouter } from 'expo-router';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
const routes = mockData[0].routes;
const berries = mockData[1].berries;

const IndexScreen = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const boxes: Box[] = useSelector(
        (state: { boxes: BoxesState }) => state.boxes.items
    );

    const handleEditBerry = (boxId: string, newBerry: string) => {
        dispatch(addBerry(boxId, newBerry))
    };

    const handleAddBox = () => {
        router.push('/(boxes)/createbox');
    };

    const handleSelectBerry = () => {
        console.log("Berry selected");
    };

    const handleSelectRoute = () => {
        console.log("Route selected");
    };

    const handleRemoveBox = (boxId: string) => {
        dispatch(removeBox(boxId));
    }

    return (
        <SafeAreaView style={styles.safeArea}>
            <View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={boxes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BoxComponent data={item} onEdit={(newBerry:string)=>handleEditBerry(item.id, newBerry)} onRemove={() => handleRemoveBox(item.id)} onSelectBerry={handleSelectBerry} onSelectRoute={handleSelectRoute}/>}
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