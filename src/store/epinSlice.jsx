import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    epins: [],
    epinRequests: [],
    isLoading: true,
    status: 'idle',
    error: null,
};

const epinSlice = createSlice({
    name: 'epin',
    initialState,
    reducers: {
        add(state, action) {
            state.epins = action.payload;
        },
        addEpinRequests(state, action) {
            state.epinRequests = action.payload;
        },
        update(state, action) {
            state.epins = state.epins.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.epins = state.epins.filter(item => item.id !== action.payload);
        },
        loading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { add, remove, addEpinRequests, update, loading } = epinSlice.actions;

export default epinSlice.reducer;