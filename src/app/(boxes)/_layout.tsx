import { Stack } from 'expo-router';
import React from 'react';

export default function BoxesLayout() {
    return (
        <Stack
            screenOptions={{
                headerShown: true,
            }}
        >
            <Stack.Screen 
                name="createbox"
                options={{ 
                    title: "Add new Box",
                    headerBackVisible: true
                }} 
            />
            <Stack.Screen
                name="editbox"
                options={{
                    title: "Edit Box"
                }}
            />
        </Stack>
    );
}
