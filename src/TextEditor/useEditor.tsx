import { convertFromRaw, convertToRaw, EditorState, RichUtils } from 'draft-js';
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NotesState } from '../utils/reducers';
import { InlineStyle } from './config';
import { v4 as uuid } from 'uuid';
import { addNote, Note, setCurrentNote, updateNote } from '../utils/actions';

export interface EditorStateI {
  editorState: EditorState,
  onChange: (state: EditorState) => void,
  toggleInlineStyle: (inlineStyle: InlineStyle) => void,
  hasInlineStyle: (inlineStyle: InlineStyle) => boolean,
}

export const useEditor = (): EditorStateI => {

  const currentNote = useSelector<NotesState, NotesState["currentNote"]>(
    (state) => state.currentNote
  );

  const defaultState = currentNote?.id ? currentNote :  {
    id: uuid(), 
    content: convertToRaw(EditorState.createEmpty().getCurrentContent())
  }

  const prevEditorState = EditorState.createWithContent(convertFromRaw(defaultState.content))
  const [note, setNote] = useState<Note>(defaultState);
  const [editorState, setEditorState] = useState(prevEditorState);

  const dispatch = useDispatch();
  
  useEffect(() => {
    const newNote = {
      id: note.id,
      content: convertToRaw(editorState.getCurrentContent())
    }
    if (!currentNote) {
      dispatch(addNote(newNote));
      dispatch(setCurrentNote(newNote));
    }
    setNote(newNote)
    dispatch(setCurrentNote(newNote));
    dispatch(updateNote({...note, content: newNote.content}));

  },[editorState])


  const saveEditorContent = (newState: EditorState) => {
    setEditorState(newState)
  }

  const toggleInlineStyle = useCallback((inlineStyle: InlineStyle) => {
    setEditorState((currentState) =>
      RichUtils.toggleInlineStyle(currentState, inlineStyle)
    );
  }, []);

  const hasInlineStyle = useCallback(
    (inlineStyle: InlineStyle) => {
      const currentStyle = editorState.getCurrentInlineStyle();
      return currentStyle.has(inlineStyle);
    },
    [editorState]
  );

  return useMemo(() => ({
    editorState,
    onChange: saveEditorContent,
    toggleInlineStyle,
    hasInlineStyle,
  }), [
    editorState,
    toggleInlineStyle,
    hasInlineStyle,
  ])
}
