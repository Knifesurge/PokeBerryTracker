import { configureStore } from '@reduxjs/toolkit';
import berryReducer from '../redux/berrySlice';
import routeReducer from '../redux/routeSlice';

export const store = configureStore({
    reducer: {
        berries: berryReducer,
        routes: routeReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;