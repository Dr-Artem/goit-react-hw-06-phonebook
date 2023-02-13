import { createSlice } from '@reduxjs/toolkit';

export const filterSlice = createSlice({
    name: 'filter',
    initialState: '',
    reducers: {
        change: (state, action) => {
            return action.payload;
        },
    },
});

export const { change } = filterSlice.actions;
