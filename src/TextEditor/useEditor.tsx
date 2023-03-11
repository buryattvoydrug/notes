import { EditorState, RichUtils } from 'draft-js';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from '../utils/reducers';
import { InlineStyle } from './config';
import { v4 as uuid } from 'uuid';
import { addNote, Note, updateNote } from '../utils/actions';

export interface EditorStateI {
  note: Note,
  onChange: (state: EditorState) => void,
  toggleInlineStyle: (inlineStyle: InlineStyle) => void,
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean,
}

export const useEditor = (): EditorStateI => {

  const currentNote = useSelector<NotesState, NotesState["currentNote"]>(
    (state) => state.currentNote
  );

  const defaultState = currentNote || {id: uuid(), content: EditorState.createEmpty()}
  const [note, setNote] = useState<Note>(defaultState);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (!currentNote) {
      dispatch(addNote(note));
    }
  },[])

  const saveEditorContent = (newState: EditorState) => {
    setNote((prev) => ({...prev, content: newState}));
    dispatch(updateNote({...note, content: newState}));
  }

  const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
    setNote((prev) => ({
      ...prev,
      content: RichUtils.toggleInlineStyle(prev.content, inlineStyle)
    })
    );
  }, []);

  const hasInlineStyle = useCallback(
    (inlineStyle: InlineStyle) => {
      const currentStyle = note.content.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [note]
  );

  return useMemo(() => ({
    note,
    onChange: saveEditorContent,
    toggleInlineStyle,
    hasInlineStyle,
  }), [
    note,
    toggleInlineStyle,
    hasInlineStyle,
  ])
}
