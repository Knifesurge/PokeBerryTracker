import BoxForm from '@/src/features/boxes/components/BoxForm';
import { addBox } from '@/src/features/boxes/store/boxesSlice';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const CreateBoxScreen = () => {
    const router = useRouter();
    const dispatch = useDispatch();

    const handleBoxSubmit = (data: { route: string; berries: string[] }) => {
        console.log(`Submit data: ${JSON.stringify(data)}`);
        dispatch(addBox(data.route, data.berries));
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <BoxForm 
                    onSubmit={(data) => handleBoxSubmit(data)}
                    submitLabel="Create"
                />
            </View>
        </SafeAreaView>
    )
};

export default CreateBoxScreen;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        padding: 20,
        gap: 20
    },
    container: {
        flex: 1,
        gap: 5,
    },
    routeButton: {
        borderColor: "#007AFF",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 12,
        textAlign: "center",
        color: "#007AFF",
        fontSize: 16,
        fontWeight: "500",
        marginTop: 20
    }
});