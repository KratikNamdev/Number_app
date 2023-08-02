import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    geneologyData: [],
    currentUserGeneology:[],
    isLoading: true,
    status: 'idle',
    error: null,
};

const geneologySlice = createSlice({
    name: 'geneology',
    initialState,
    reducers: {
        add(state, action) {
            state.geneologyData = action.payload;
        },
        addTree(state, action) {
            state.currentUserGeneology = action.payload;
        },
        addOne(state, action) {
            state.geneologyData = [action.payload, ...state.geneologyData];
        },
        update(state, action) {
            state.geneologyData = state.geneologyData.map(item => item.id === action.payload.id ? action.payload : item);
        },
        remove(state, action) {
            state.geneologyData = state.geneologyData.filter(item => item.id !== action.payload);
        },
        loading(state, action) {
            state.isLoading = action.payload;
        }
    }
});

export const { add, remove, addOne, update, loading, addTree } = geneologySlice.actions;

export default geneologySlice.reducer;