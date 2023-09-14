import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
    name: 'filter',
    initialState: initialState,

    reducers: {
        setFilter(state, action) {
            return action.payload;
        },
    },
});

export const { setFilter } = filterSlice.actions;
export const selectFilter = state => state.filter;
export default filterSlice.reducer;
