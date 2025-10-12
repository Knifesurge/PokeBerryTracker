import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { removeBox, updateBox } from '../store/boxesSlice';

import { RootState } from '../store/pokeStore';
import BoxComponent from './BoxComponent';

const BoxFeed = () => {
    const boxes = useSelector((state: RootState) => state.boxes.items);
    const dispatch = useDispatch();

    const handleEditBerry = (boxId: string, newBerry: string) => {
        dispatch(updateBox(boxId, newBerry))
    };

    const handleRemoveBox = (boxId: string) => {
        dispatch(removeBox(boxId));
    }

    return (
            <View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={boxes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BoxComponent data={item} onRemove={() => handleRemoveBox(item.id)} onEdit={(newBerry: string) => handleEditBerry(item.id, newBerry)}/>}
                />
            </View>
    );
};

export default BoxFeed;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 20,
    },
    list: {
        marginTop: 20,
        width: "auto",
        alignSelf: "center"
    },
    listContent: {
        justifyContent: "center"
    },
});