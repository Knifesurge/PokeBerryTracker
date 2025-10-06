import SearchableSelector from '@/src/features/routeselector/SearchableSelector';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CreateBoxScreen = () => {

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchableSelector
                    options={[]}
                    onSelect={(val) => console.log(`Selected: ${val}`)}
                    label="Select Route"
                />
                <SearchableSelector
                    options={[]}
                    onSelect={(val) => console.log(`Selected: ${val}`)}
                    label="Select Berry"
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
});