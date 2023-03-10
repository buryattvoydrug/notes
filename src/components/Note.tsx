import React, { ChangeEvent, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNote, updateNote } from '../utils/actions';
import { v4 as uuid } from 'uuid';
import { NotesState } from '../utils/reducers';


export default function Note() {
  
  const currentNote = useSelector<NotesState, NotesState["currentNote"]>(
    (state) => state.currentNote
  );
  const defaultState = currentNote || {id: uuid(), content: ""}

  const [note, setNote] = React.useState(defaultState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!currentNote) {
      dispatch(addNote(note));
    }
  },[])


  const changeNoteHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNote((prev) => ({...prev, content: e.target.value}));
    dispatch(updateNote({...note, content: e.target.value}));
  }

  
  
  console.log(note)

  return (
    <>
    <textarea name="note" id="" cols={30} rows={10} 
      value={note.content}
      onChange={(e) => changeNoteHandler(e)}
      ></textarea>
    </>
  )
}
