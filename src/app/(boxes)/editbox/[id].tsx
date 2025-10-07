import { Box, BoxesState } from '@/src/features/boxes/store/types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';

const EditBoxScreen = () => {
    const router = useRouter();
    const { id } = useLocalSearchParams<{ id: string }>();
    const box: Box | undefined = useSelector(
        (state: { boxes: BoxesState }) => state.boxes.items.find(b => b.id === id)
    );

    if (!box) {
        router.navigate(`/+not-found`);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Editing...</Text>
            <Text style={styles.text}>Box ID: {id}</Text>
            <Text style={styles.text}>Route Name: {box!.routeName}</Text>
            <Text style={styles.text}>Berries: {box!.berries.map(b => b.name).join(', ')}</Text>
        </SafeAreaView>
    );
}

export default EditBoxScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
    },
});
