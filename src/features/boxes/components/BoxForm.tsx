import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';
import SearchableSelector from '../../routeselector/SearchableSelector';
import { berriesList, routesList } from '../store/initialData';

type Props = {
    initialRoute?: string;
    initialBerries?: string[];
    onSubmit: (data: { route: string; berries: string[] }) => void;
    submitLabel?: string;
};

const BoxForm = ({
    initialRoute = "",
    initialBerries = [],
    onSubmit,
    submitLabel = "Save"
}: Props) => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute || "");
    const [berrySelections, setBerrySelections] = useState<string[]>([...Array(4).map((_, i) => initialBerries[i] || "")]);
    
    const handleRouteSelection = (value: string) => {
        console.log(`Selected: ${value}`);
        setSelectedRoute(value);
    };

    const handleBerrySelection = (value: string, index: number) => {
        console.log(`Selected: ${value} in slot ${index}`);
        const newList = [...berrySelections];
        newList[index] = value;
        setBerrySelections(newList);
    };

    const handleBoxSubmit = () => {
        onSubmit({ route: selectedRoute, berries: berrySelections });
        router.back();
        /*
        console.log(`Box created: {${selectedRoute}, ${berrySelections}}`);
        dispatch(addBox(selectedRoute, berrySelections));
        setSelectedRoute("");
        setBerrySelections(["","","",""]);
        router.back();
        */
    };

    return (
        <View style={styles.container}>
            <SearchableSelector
                    options={routesList}
                    onSelect={handleRouteSelection}
                    label={selectedRoute ? `Route: ${selectedRoute}` : "Select Route"}
            />
            {berrySelections.map((berry, index) => (
                <SearchableSelector
                    key={index}
                    options={berriesList}
                    onSelect={(val)=>handleBerrySelection(val, index)}
                    label={berrySelections[index] ? `Berry: ${berrySelections[index]}` : "Select Berry"}
                />
            ))}

            <TouchableOpacity activeOpacity={0.8} onPress={handleBoxSubmit}>
                <Text style={styles.addBoxButton}>{submitLabel} Box</Text>
            </TouchableOpacity>
        </View>
    );
};

export default BoxForm;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    addBoxButton: {
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
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    }
}); 