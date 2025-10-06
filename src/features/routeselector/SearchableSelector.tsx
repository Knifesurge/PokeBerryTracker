import React, { useState } from 'react';
import {
    FlatList,
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = {
    options: string[];
    onSelect: (val: string) => void;
    label?: string;
};

const SearchableSelector = ({ options, onSelect, label}: Props) => {
    const [visible, setVisible] = useState(false);
    const [query, setQuery] = useState("");

    const filtered = options.filter(opt => opt.toLowerCase().includes(query.toLowerCase()));

    const toggleVisible = () => setVisible(!visible);

    return (
            <View>
                <TouchableOpacity style={styles.button} onPress={toggleVisible}>
                    <Text style={styles.buttonText}>{label}</Text>
                </TouchableOpacity>

                <Modal visible={visible} animationType="slide">
                    <SafeAreaView style={styles.modalContainer}>
                        <View style={styles.modalContent}>
                            <TextInput
                                style={styles.search}
                                placeholder='Search...'
                                value={query}
                                onChangeText={setQuery}
                            />

                            <FlatList
                                data={filtered}
                                keyExtractor={(item) => item}
                                keyboardShouldPersistTaps="handled"
                                renderItem={ ({ item }) => (
                                    <TouchableOpacity
                                        style={styles.option}
                                        onPress={() => {
                                            onSelect(item);
                                            setVisible(false);
                                        }}
                                    >
                                        <Text>{item}</Text>
                                    </TouchableOpacity>
                                )}
                            />
                        </View>
                    </SafeAreaView>
                </Modal>
            </View>
    );
};

export default SearchableSelector;

const styles = StyleSheet.create({
    button: {
        padding: 12,
        backgroundColor: "#4CAF50",
        borderRadius: 8
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    modalContainer: {
        flex: 1,
        backgroundColor: "#fff",
        paddingTop: 40,
        paddingHorizontal: 16,
    },
    modalContent: {
        backgroundColor: "#fff",
        padding: 8,
        paddingBottom: 20,
    },
    search: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 10,
        marginBottom: 12,
    },
    option: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: "#eee",
    },
    optionText: {
        fontSize: 16,
    },
    cancelButton: {
        padding: 16,
    },
    cancelText: {
        textAlign: "center",
        fontSize: 16,
        color: "red",
    },
});