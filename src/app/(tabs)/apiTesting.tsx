import CodeBlock from "@/src/components/CodeBlock";
import PokeApi from "@/src/shared/api/PokeApiClient";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const ApiTestingScreen = () => {
    const [data, setData] = useState<string>("Select an option above.");

    const handleAllBerries = async () => {
        try {
            const berries = await PokeApi.getAllBerries();
            console.log(JSON.stringify(berries, null, 2));
            setData(JSON.stringify(berries, null, 2));
        } catch (error) {
            console.error("Error fetching all berries:", error);
            setData("Error fetching all berries");
        }
    };

    const handleAllRoutes = async () => {
        try {
            const routes = await PokeApi.getAllRoutes();
            setData(JSON.stringify(routes, null, 2));
        } catch (error) {
            console.error("Error fetching all routes:", error);
            setData("Error fetching all routes");
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.text}>API Testing Screen</Text>
            <View style={styles.buttonContainer}>
                <Text style={styles.button} onPress={handleAllBerries}>All Berries</Text>
                <Text style={styles.button}>Specific Berries</Text>
                <Text style={styles.button} onPress={handleAllRoutes}>All Routes</Text>
                <Text style={styles.button}>Specific Routes</Text>
            </View>
            <CodeBlock data={data}/>
        </View>
    );
};

export default ApiTestingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        flexDirection: "row",
        justifyContent: "space-around",
        marginVertical: 10,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    },
    button: {
        borderColor: "#007AFF",
        borderWidth: 1,
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 8,
        fontSize: 14,
        color: "#007AFF",
    },
});