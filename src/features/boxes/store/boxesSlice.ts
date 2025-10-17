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
            prepare: (routeName: string, berries: string[]) => ({
                payload: {
                    id: nanoid(),
                    routeName,
                    berries: berries.map((berry) => ({
                        id: nanoid(),
                        name: berry,
                    }) as Berry),
                } as Box,
            }),
        },
        removeBox: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(box => box.id !== action.payload);
        },
        updateBox: (state, action: PayloadAction<{ id:string; routeName?:string, berries: string[] }>) => {
            const { id, routeName, berries } = action.payload;
            const box = state.items.find(box => box.id === id);
            if (box) {
                box.berries = berries.map((berry) => ({
                    id: nanoid(),
                    name: berry,
                }) as Berry);
                box.routeName = routeName ?? box.routeName;
            }
        },
    },
});

export const { addBox, removeBox, updateBox } = boxesSlice.actions;
export default boxesSlice.reducer;