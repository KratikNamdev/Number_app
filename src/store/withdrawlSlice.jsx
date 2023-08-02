import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    withdrawls: [],
    isLoading: true,
    status: 'idle',
    error: null,
};

const withdrawlSlice = createSlice({
    name: 'withdrawl',
    initialState,
    reducers: {
        add(state, action) {
            state.withdrawls = action.payload;
        },
        addOne(state, action) {
            state.withdrawls = [action.payload, ...state.withdrawls];
        },
        update(state, action) {
            state.withdrawls = state.withdrawls.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.withdrawls = state.withdrawls.filter(item => item.id !== action.payload);
        },
        loading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { add, remove, addOne, update, loading } = withdrawlSlice.actions;

export default withdrawlSlice.reducer;