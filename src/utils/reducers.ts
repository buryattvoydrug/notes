import { Action, Note } from "./actions"

export interface NotesState {
  notes: Note[],
  currentNote: Note | null,
}

const initialState = {
  notes: [],
  currentNote: null
}

export const notesReducer = (state:NotesState = initialState, action: Action) => {
  switch(action.type){
    case "ADD_NOTE": {
      return {...state, notes: [...state.notes, action.payload]}
    }
    case "DELETE_NOTE": {
      state.notes = state.notes.filter((item) => item.id !== action.payload.id)
      return {...state}
    }
    case "UPDATE_NOTE": {
      state.notes = state.notes.map((item) => item.id === action.payload.id
                                              ? action.payload
                                              : item);
      return {...state}
    }
    case "SET_CURRENT_NOTE": {
      return {...state, currentNote: action.payload}
    }
    default:
      return state
  }
}