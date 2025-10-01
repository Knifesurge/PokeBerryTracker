import { Tabs } from "expo-router";
import React from 'react';

export default function TabsLayout() {
  return (
    <Tabs
        initialRouteName="index"
        screenOptions={{
            headerShown: true
        }}
    >
        <Tabs.Screen
            name="index"
            options={{ title: "Home"}}
        />
        <Tabs.Screen
            name="map"
            options={{ title: "Map"}}
        />
    </Tabs>
  )
}
