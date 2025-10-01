import { RouteBox } from '@/src/app/constants/types';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type Props = {
    box: RouteBox;
    onSelectRoute: (route: string) => void;
    onSelectBerry: (berryId: string, berry: string|null) => void;
};

const RouteBoxComponent = ({box, onSelectRoute, onSelectBerry}: Props) => {
    return (
        <View style={styles.container}>
            <View style={styles.icon} />

            <View style={styles.grid}>
                <View style={styles.cell}>
                    <View style={styles.smsquare} />
                    <Text style={styles.label}>Label1</Text>
                </View>
                <View style={styles.cell}>
                    <View style={styles.smsquare} />
                    <Text style={styles.label}>Label2</Text>
                </View>
                <View style={styles.cell}>
                    <View style={styles.smsquare} />
                    <Text style={styles.label}>Label3</Text>
                </View>
                <View style={styles.cell}>
                    <View style={styles.smsquare} />
                    <Text style={styles.label}>Label4</Text>
                </View>
            </View>
        </View>
    );
};

export default RouteBoxComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        padding: 10,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "black",
        marginBottom: 12,
        marginHorizontal: 20
    },
    icon: {
        height: 50,
        width: 50,
        padding: 10,
        backgroundColor: "#fc1",
        marginRight: 12
    },
    grid: {
        flexDirection: "row",
        flexWrap: "wrap",
        width: 160, // 2 cells per row
    },
    cell: {
        flexDirection: "row",
        alignItems: "center",
        width: "50%",
        marginBottom: 8
    },
    smsquare: {
        width: 20,
        height: 20,
        backgroundColor: "#bbb",
        marginRight: 6
    },
    label: {
        fontSize: 14,
        color: "#333"
    },
})