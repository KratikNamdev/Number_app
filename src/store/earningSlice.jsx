import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    earnings: [],
    isLoading: true,
    status: 'idle',
    error: null,
};

const earningSlice = createSlice({
    name: 'earning',
    initialState,
    reducers: {
        add(state, action) {
            state.earnings = action.payload;
        },
        addOne(state, action) {
            state.earnings = [action.payload, ...state.earnings];
        },
        update(state, action) {
            state.earnings = state.earnings.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.earnings = state.earnings.filter(item => item.id !== action.payload);
        },
        loading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { add, remove, addOne, update, loading } = earningSlice.actions;

export default earningSlice.reducer;