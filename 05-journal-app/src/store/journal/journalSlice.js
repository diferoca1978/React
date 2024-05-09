import { createSlice } from '@reduxjs/toolkit';


export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaved: false,
        messageSaved: '',
        notes: [],
        active: null,
        // active: {
        //     id: 'ABC123',
        //     title: '',
        //     body: '',
        //     date: 1234567,
        //     imageURL: [], // https://fhoto1.jpg, https:photo2.jpg ..... somethitng like this is that we want to look an active note.
        // }


    },
    reducers: {
        savingNewNote: (state) => {
             state.isSaved = true;
        },

        createNewNote: (state, action) => {
            state.notes.push( action.payload );
            state.isSaved = false;
        },

        setNotes: (state, action) => {
             state.notes = action.payload
             
        },
        
        setActiveNote: (state, action) => {
            state.active = action.payload;
            state.messageSaved = '';
        },

        setSaving: (state) => {
             state.isSaved = true;
             state.messageSaved = '';
        },

        updatedNote: (state,action) => {
            state.isSaved = false;
            state.notes = state.notes.map(note => {
                if (note.id === action.payload.id) {
                    return action.payload;
                }

                return note
            });

            state.messageSaved = `${ action.payload.title},`            
        },

        setPhotosToActiveNote: (state, action) => {
            state.active.imgURL = [...state.active.imgURL, ...action.payload];
            state.isSaved = false;
        },
        
        clearLogOut: (state) => {

            state.isSaved = false,
            state.messageSaved = '',
            state.notes = [],
            state.active = null

        },

        deleteNoteById: (state, action) => {
            state.active = null
            state.notes = state.notes.filter(note => note.id !== action.payload);
        }
    }
});


// Action creators are generated for each case reducer function
export const { 
clearLogOut,
createNewNote,
deleteNoteById,
savingNewNote,
setActiveNote,
setNotes,
setPhotosToActiveNote,
setSaving,
updatedNote,
} = journalSlice.actions;  