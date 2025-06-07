import { createSlice } from "@reduxjs/toolkit";

const saveNoteSlice = createSlice({
    name:"saveData",
    initialState:[],
   reducers:{
    saveNote:(state,action)=>{
        return action.payload
    }
   }
})
export const {saveNote} = saveNoteSlice.actions
export default saveNoteSlice.reducer