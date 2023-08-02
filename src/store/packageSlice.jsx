import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    packages: [],
    isLoading: true,
    status: 'idle',
    error: null,
};

const packageSlice = createSlice({
    name: 'package',
    initialState,
    reducers: {
        loading(state, action){
            state.isLoading=action.payload;
        },
        add(state, action) {
            state.packages = action.payload;
        },
        addOne(state, action) {
            state.packages = [action.payload, ...state.packages];
        },
        update(state, action) {
            state.packages = state.packages.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.packages = state.packages.filter(item => item.id !== action.payload);
        }
    }
});

export const { add, remove, addOne, update, loading } = packageSlice.actions;

export default packageSlice.reducer;