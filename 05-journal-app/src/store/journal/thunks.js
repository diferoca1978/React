import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";
import { createNewNote, deleteNoteById, savingNewNote, setActiveNote, setNotes, setPhotosToActiveNote, setSaving, updatedNote } from "./journalSlice";
import { fileUpload, loadNotes } from "../../journal/helpers";



export const startNewNote  = () => {
  return async ( dispatch, getState ) => {

    dispatch(savingNewNote());
   
    //uid //! here we need to take the uid in some way
    
    const { uid } = getState().auth;

    const newNote = {
      title: '',
      body: '',
      date: new Date().getTime(),
    }


    const newDoc = doc(collection( FirebaseDB, `${ uid }/journal/notes`))
    await setDoc(newDoc, newNote)

    newNote.id = newDoc.id;

    // dispatch to do:
    dispatch( createNewNote( newNote ) );
    dispatch( setActiveNote( newNote) );
    
  }   
}

export const startLoadingNotes = () => {
  return async ( dispatch, getState) => {
    const { uid } = getState().auth;
    if (!uid) throw new Error('the uid does not exists');


    const notes = await loadNotes( uid );
    dispatch( setNotes(notes));

  } 
}

export const startUpdateNote = () => {
  return async(dispatch, getstate) => {

    dispatch( setSaving() )

    const { uid } = getstate().auth;
    const {active:note} = getstate().journal;

    const noteToFireStore = {...note}
    delete noteToFireStore.id

    const docRef = doc( FirebaseDB, `${ uid }/journal/notes/${note.id}` )
    await setDoc( docRef, noteToFireStore, {merge: true})

    dispatch(updatedNote( note ))
  } 
}

export const startUploadingFiles = (files= []) => {
  return async (dispatch) => {
    dispatch(setSaving())

    const fileUploadPromises = [];
    for (const file of files) {
      fileUploadPromises.push(fileUpload(file))
    }

    const photosURLS = await Promise.all( fileUploadPromises );

    dispatch(setPhotosToActiveNote(photosURLS));

  }  
}

export const startDeletingNote = () => {
  return async(dispatch, getState)=> {

    const {uid} = getState().auth;
    const {active: note} = getState().journal;

    const docRef = doc(FirebaseDB, `${ uid }/journal/notes/${note.id}`);
    await deleteDoc( docRef );

    dispatch( deleteNoteById(note.id))
    
  }
}