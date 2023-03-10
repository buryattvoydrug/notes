import { createStore } from 'redux'
import {notesReducer} from './reducers'

const localState = localStorage.getItem('reduxState')
const defaultState = {
  currentNote: null, 
  notes: [{
    id: 0,
    content: 'Заметка'
  }]
}
const persistedState = localState 
                       ? JSON.parse(localState)
                       : defaultState

export const store = createStore(notesReducer, persistedState)
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})