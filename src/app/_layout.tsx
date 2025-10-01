import { Stack } from "expo-router";
import { Provider } from 'react-redux';
import { store } from './features/pokedata/store/pokeStore';

export default function RootLayout() {
  return (
    <Provider store={store}>
      <Stack>
        <Stack.Screen name="index" options={{ title: "Home"}} />
      </Stack>
    </Provider>
  )
}
