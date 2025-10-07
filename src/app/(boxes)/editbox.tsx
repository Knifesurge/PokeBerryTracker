import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreateBoxScreen = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Create Box Screen</Text>
        </View>
    );
}

export default CreateBoxScreen;

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
