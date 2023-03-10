import { Button, Card, CardActions, CardContent, Typography } from '@material-ui/core'
import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteNote, Note, setCurrentNote } from '../utils/actions';

interface NoteCardProp {
  note: Note,
}

export default function NoteCard({note}: NoteCardProp) {

  const dispatch = useDispatch();

  const handleSetCurrentNote = () => {
    dispatch(setCurrentNote(note))
  }

  const handleDeleteNote = () => {
    dispatch(deleteNote(note))
  }

  return (
    <>
      <Card variant="outlined" style={{width: "100%", marginBottom: "10px"}}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {note.content}
          </Typography>
        </CardContent>
        <CardActions>
          <Link to="/">
            <Button size="small" onClick={handleSetCurrentNote}>Изменить</Button>
          </Link>
          <Button size="small" onClick={handleDeleteNote}>Удалить</Button>

        </CardActions>
      </Card>
    </>
  )
}
