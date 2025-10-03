import PokeApi from '@/src/app/shared/api/PokeApiClient';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchBerry = createAsyncThunk(
    "berries/fetchBerry",
    async (nameOrId: string) => {
        return await PokeApi.getBerry(nameOrId);
    }
);

const berrySlice = createSlice({
    name: "berries",
    initialState: {
        data: {} as Record<string, any>,
        status: "idle",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchBerry.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchBerry.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data[action.payload.name] = action.payload;
         })
         .addCase(fetchBerry.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Error fetching berry";
         });
    },
});

export default berrySlice.reducer;