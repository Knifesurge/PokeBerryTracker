import { store } from '@/src/features/pokedata/store/pokeStore';
import { Stack } from "expo-router";
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="(tabs)" options={{ headerShown: false}} />
        <Stack.Screen name="(boxes)" options={{ headerShown: false}} />
      </Stack>
    </Provider>
  )
}
