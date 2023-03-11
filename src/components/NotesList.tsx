import { useSelector } from 'react-redux';
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
      {!notes.length &&  
      <span>Список заметок пуст</span>
      }
    </>
  )
}
