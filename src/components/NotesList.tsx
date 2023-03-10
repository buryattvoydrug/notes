import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addNote } from '../utils/actions';
import { NotesState } from '../utils/reducers';
import NoteCard from './NoteCard';

export default function NotesList() {

  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  return (
    <>
      {notes.map((item) => (
        <NoteCard 
          key={item.id}
          note={item}
        />
      ))}
    </>
  )
}
