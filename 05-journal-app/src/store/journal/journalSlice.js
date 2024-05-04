import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaved: true
    },
    reducers: {
        increment: (state, /* action */ ) => {
            //! https://react-redux.js.org/tutorials/quick-start
            state.counter += 1;
        },
    }
});


// Action creators are generated for each case reducer function
export const { increment } = journalSlice.actions;  