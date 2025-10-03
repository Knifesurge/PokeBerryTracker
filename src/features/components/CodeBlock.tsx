import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

type CodeBlockProps = {
    data: string;
};

const CodeBlock = ({ data }: CodeBlockProps) => {
    return (
        <View style={styles.container}>
            <Text style={styles.codeText}>{data}</Text>
        </View>
    );
};

export default CodeBlock;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: "#f5f5f5",
        borderRadius: 8,
    },
    codeText: {
        fontFamily: 'monospace',
        fontSize: 14,
        backgroundColor: "#1e1e1e",
        color: "#d4d4d4",
        padding: 12,
        borderRadius: 8,
        lineHeight: 20,
    }
});