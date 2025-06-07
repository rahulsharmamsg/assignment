import {configureStore } from '@reduxjs/toolkit'
import saveNoteReducer from '../store/slice/saveNote'


export const store = configureStore({
    reducer:{
        notes:saveNoteReducer
    }
})