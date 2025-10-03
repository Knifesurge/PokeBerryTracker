import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import CodeBlock from "../features/components/CodeBlock";
import PokeClient from "../shared/api/PokeApiClient";

const ApiTestingScreen = () => {
    const [data, setData] = useState<string>("Loading...");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const berries = await PokeClient.getAllBerries();
                setData(JSON.stringify(berries, null, 2));
            } catch (error) {
                console.error("Error fetching data:", error);
                setData("Error fetching data");
            }
        };
        fetchData();
    });

    return (
        <View style={styles.container}>
            <Text style={styles.text}>API Testing Screen</Text>
            <CodeBlock data={data}/>
        </View>
    );
};

export default ApiTestingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    text: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
    }
});