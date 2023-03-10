import { createStore } from 'redux'
import {notesReducer} from './reducers'

const localState = localStorage.getItem('reduxState')
const persistedState = localState 
                       ? JSON.parse(localState)
                       : []

export const store = createStore(notesReducer, persistedState)
store.subscribe(()=>{
  localStorage.setItem('reduxState', JSON.stringify(store.getState()))
})