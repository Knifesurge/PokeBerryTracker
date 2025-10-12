import { Box } from '@/src/features/boxes/store/types';
import { useRouter } from 'expo-router';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Props = {
    data: Box;
    onRemove: () => void;
    onEdit: (newBerry: string) => void;
};

const BoxComponent = ({data, onRemove, onEdit}: Props) => {
    const router = useRouter();

    const handleEditBox = () => {
        router.push(`/(boxes)/editbox/${data.id}`);
    };

    return (
        <View style={styles.container}>
            <View style={styles.icon}>
                <Text style={styles.iconText}>{data.routeName}</Text>
            </View>

            <View style={styles.grid}>
                {data.berries.map((berry, index) => (
                    <TouchableOpacity style={styles.cell} key={berry.id}onPress={handleEditBox}>
                    <View style={styles.berryIcon} />
                    <Text style={styles.label}>
                        {data.berries ? data.berries[index].name : "No Berry"}
                    </Text>
                </TouchableOpacity>
                ))}
            </View>

            <View style={styles.binIcon}>
                <Text onPress={onRemove}>Delete</Text>
            </View>
        </View>
    );
};

export default BoxComponent;

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "space-evenly",
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
    binIcon: {
        width: 48,
        height: "auto",
        borderColor: "black",
        backgroundColor: "red",
        borderRadius: 10,
        borderWidth: 1,
        alignItems: "center",
    },
    iconText: {
        fontSize: 18,
        fontFamily: "Roboto"
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
    berryIcon: {
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