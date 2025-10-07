import { createSlice, nanoid, PayloadAction } from '@reduxjs/toolkit';

import { Berry, Box, BoxesState } from './types';

const initialState: BoxesState = {
    items: [],
};

const boxesSlice = createSlice({
    name: "boxes",
    initialState,
    reducers: {
        addBox:  {
            reducer: (state, action: PayloadAction<Box>) => {
                state.items.push(action.payload);
            },
            prepare: (routeName: string, berryName: string) => ({
                payload: {
                    id: nanoid(),
                    routeName,
                    berries: berryName ? [{id: nanoid(), name: berryName} as Berry] : [],
                } as Box,
            }),
        },
        removeBox: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(box => box.id !== action.payload);
        },
        addBerry: {
            reducer: (state, action: PayloadAction<{ boxId: string; berry: Berry }>) => {
                const box = state.items.find((b) => b.id === action.payload.boxId);
                if (box && box.berries.length < 4) {
                    box.berries.push(action.payload.berry);
                }
            },
            prepare: (boxId: string, berry: string) => ({
                payload: {
                    boxId, berry: {
                        id: nanoid(),
                        name: berry,
                    } as Berry,
                },
            }),
        },
        removeBerry: (state, action: PayloadAction<{ boxId: string; berryId: string }>) => {
            const box = state.items.find((b) => b.id === action.payload.boxId);
            if (box) {
                box.berries = box.berries.filter((b) => b.id !== action.payload.berryId);
            }
        },
    },
});

export const { addBox, removeBox, addBerry, removeBerry } = boxesSlice.actions;
export default boxesSlice.reducer;