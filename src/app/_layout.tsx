import { store } from '@/src/features/pokedata/store/pokeStore';
import { Stack } from "expo-router";
import { Provider } from 'react-redux';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="index" options={{ title: "Home"}} />
      </Stack>
    </Provider>
  )
}
