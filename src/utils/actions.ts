import { EditorState, RawDraftContentState } from "draft-js";

export type Note = {
  id: string,
  content: RawDraftContentState,
}

export type Action = { 
  type: string,
  payload: Note
};

export type SetCurrentAction = { 
  type: string,
  payload: Note | null
};

export const addNote = (note: Note): Action => ({
  type: "ADD_NOTE",
  payload: note,
});

export const deleteNote = (note: Note): Action => ({
  type: "DELETE_NOTE",
  payload: note,
});

export const updateNote = (note: Note): Action => ({
  type: "UPDATE_NOTE",
  payload: note,
});

export const setCurrentNote = (note: Note | null): SetCurrentAction => ({
  type: "SET_CURRENT_NOTE",
  payload: note,
});
