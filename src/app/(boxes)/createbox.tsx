import { addBox } from '@/src/features/boxes/store/boxesSlice';
import { berriesList, routesList } from '@/src/features/boxes/store/initialData';
import SearchableSelector from '@/src/features/routeselector/SearchableSelector';
import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const CreateBoxScreen = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [selectedRoute, setSelectedRoute] = useState<string>("");
    const [selectedBerry, setSelectedBerry] = useState<string>("");

    const handleRouteSelection = (value: string) => {
        console.log(`Selected: ${value}`);
        setSelectedRoute(value);
    };

    const handleBerrySelection = (value: string) => {
        console.log(`Selected: ${value}`);
        setSelectedBerry(value);
    };

    const handleBoxSubmit = () => {
        console.log(`Box created: {${selectedRoute}, ${selectedBerry}}`);
        dispatch(addBox(selectedRoute, selectedBerry));
        setSelectedRoute("");
        setSelectedBerry("");
        router.back();
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <SearchableSelector
                    options={routesList}
                    onSelect={handleRouteSelection}
                    label={selectedRoute ? `Route: ${selectedRoute}` : "Select Route"}
                />
                {Array.from({ length: 4 }).map((_, index) => (
                    <SearchableSelector
                        key={index}
                        options={berriesList}
                        onSelect={handleBerrySelection}
                        label={selectedBerry ? `Berry: ${selectedBerry}` : "Select Berry"}
                    />
                ))}
                <TouchableOpacity activeOpacity={0.8} onPress={handleBoxSubmit}>
                    <Text style={styles.routeButton}>Create Box</Text>
                </TouchableOpacity>
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