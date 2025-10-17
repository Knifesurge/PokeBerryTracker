import React from 'react';

import { FlatList, StyleSheet, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'expo-router';
import { RootState } from '../store/pokeStore';
import BoxComponent from './BoxComponent';

const BoxFeed = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const boxes = useSelector((state: RootState) => state.boxes.items);

    const handleEdit = (boxId: string) => {
        router.push(`/(boxes)/editbox/${boxId}`);
    };

    return (
            <View>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={styles.listContent}
                    data={boxes}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => <BoxComponent data={item} onEdit={() => handleEdit(item.id)}/>}
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