import PokeApi from '@/src/shared/api/PokeApiClient';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';


export const fetchRoute = createAsyncThunk(
    "routes/fetchRoute",
    async (nameOrId: string) => {
        return await PokeApi.getRoute(nameOrId);
    },
);

const routeSlice = createSlice({
    name: "routes",
    initialState: {
        data: {} as Record<string, any>,
        status: "idle",
        error: null as string | null,
    },
    reducers: {},
    extraReducers: (builder) => {
        builder
         .addCase(fetchRoute.pending, (state) => {
            state.status = "loading";
         })
         .addCase(fetchRoute.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.data[action.payload.name] = action.payload;
         })
         .addCase(fetchRoute.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message ?? "Error fetching route";
         });
    },
});

export default routeSlice.reducer;