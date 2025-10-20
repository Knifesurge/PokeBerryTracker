import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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
    submitLabel = "Create"
}: Props) => {
    const router = useRouter();
    const [selectedRoute, setSelectedRoute] = useState<string>(initialRoute || "");
    const [berrySelections, setBerrySelections] = useState<string[]>(initialBerries.length ? initialBerries.slice(0,4) : ["","","",""]);
    
    const handleRouteSelection = (value: string) => {
        setSelectedRoute(value);
    };

    const handleBerrySelection = (value: string, index: number) => {
        const newList = [...berrySelections];
        newList[index] = value;
        setBerrySelections(newList);
    };

    const handleBoxSubmit = () => {
        onSubmit({ route: selectedRoute, berries: berrySelections });
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
                    key={`berry-select-${index}`}
                    options={berriesList}
                    onSelect={(val)=>handleBerrySelection(val, index)}
                    label={berry ? `${berry}` : "Select Berry"}
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