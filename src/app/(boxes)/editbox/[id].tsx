import BoxForm from '@/src/features/boxes/components/BoxForm';
import { Box, BoxesState } from '@/src/features/boxes/store/types';
import { useLocalSearchParams, useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';

import { updateBox } from '@/src/features/boxes/store/boxesSlice';

const EditBoxScreen = () => {
    const { id } = useLocalSearchParams<{ id: string }>();
    const router = useRouter();
    const dispatch = useDispatch();
    
    const box: Box | undefined = useSelector(
        (state: { boxes: BoxesState }) => state.boxes.items.find(b => b.id === id)
    );
    
    const handleSubmit = (data: { route: string; berries: string[] }) => {
        dispatch(updateBox({id, routeName: data.route, berries: data.berries}));
        router.back();
    }
    
    if (!box) {
        router.navigate(`/+not-found`);
    }
    
    return (
        <SafeAreaView style={styles.container}>
            <Text>Berries: {box!.berries.map(b=>b.name || "")}</Text>
            <BoxForm 
                initialRoute={box!.routeName}
                initialBerries={box!.berries.map(b => b.name)}
                onSubmit={(data) => handleSubmit(data)}
                submitLabel="Update"
            />
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
