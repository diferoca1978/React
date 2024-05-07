import { collection, getDocs } from "firebase/firestore/lite";
import { FirebaseDB } from "../../firebase/config";


export const loadNotes = async( uid = '') => {
  if (!uid) throw new Error('the uid does not exists');

  //* here we're bring our collection of notes through this:

  const collectionRef = collection(FirebaseDB, `${ uid }/journal/notes`); // Methods given to Firebase
  const docs = await getDocs(collectionRef);

  const notes = []

  docs.forEach(( doc ) => {
    notes.push({id: doc.id, ...doc.data()});
  })
  
  return notes;
}
