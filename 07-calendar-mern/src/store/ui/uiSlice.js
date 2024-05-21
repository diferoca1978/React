import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
    name: 'ui',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onDateOpenModal: ( state ) => {
          state.isDateModalOpen = true;
        },

        onCloseDateModal: ( state ) => {
          state.isDateModalOpen = false;
        }
    }
});


// Action creators are generated for each case reducer function
export const { onDateOpenModal, onCloseDateModal } = uiSlice.actions