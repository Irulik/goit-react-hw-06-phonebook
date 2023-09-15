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

export const selectFilteredContacts = state => {
    const filter = selectFilter(state).toLowerCase();
    return state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter));
};

export default filterSlice.reducer;
