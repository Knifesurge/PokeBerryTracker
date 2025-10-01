import { Link, Stack } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';

const NotFoundScreen = () => {
    return (
        <>
            <Stack.Screen options={{ title: "Page Not Found"}} />
            <View style={styles.container}>
                <Text style={styles.text}>This screen doesn't exist.</Text>
                <Link href="/" style={styles.link}>
                    <Text style={styles.text}>Go to home.</Text>
                </Link>
            </View>
        </>
    )
}

export default NotFoundScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },
    text: {},
    link: {
        marginTop: 15,
        paddingVertical: 15
    },
})