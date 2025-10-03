import React, { useState } from 'react';
import {
    Modal,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';

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
                <View style={styles.modalContainer}>
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
                                }
                            >
                        )}
                    />
                </View>
            </Modal>
        </View>
    );
};

export default SearchableSelector;

const styles = StyleSheet.create({

});