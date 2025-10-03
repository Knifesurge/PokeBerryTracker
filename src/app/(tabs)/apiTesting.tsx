import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import CodeBlock from "../features/components/CodeBlock";
import PokeApiClient from "../shared/api/PokeApiClient";

const PokeClient = new PokeApiClient();

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
    })

    return (
        <View style={styles.container}>
            <CodeBlock data={data}/>
        </View>
    );
};

export default ApiTestingScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});