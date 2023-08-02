import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    directSponsors: [],
    isLoading: true,
    status: 'idle',
    error: null,
};

const directSponsorsSlice = createSlice({
    name: 'directSponsor',
    initialState,
    reducers: {
        add(state, action) {
            state.directSponsors = action.payload;
        },
        addOne(state, action) {
            state.directSponsors = [action.payload, ...state.directSponsors];
        },
        update(state, action) {
            state.directSponsors = state.directSponsors.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.directSponsors = state.directSponsors.filter(item => item.id !== action.payload);
        },
        loading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { add, remove, addOne, update, loading } = directSponsorsSlice.actions;

export default directSponsorsSlice.reducer;