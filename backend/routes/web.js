import express from 'express'
import { deleteNote, getNote, NoteAdd, searchNote } from '../controller/firstController.js';
const web = express.Router();
web.post("/notes",NoteAdd)
web.delete("/notes/:deleteId",deleteNote)
web.get("/notes",getNote)
// web.get("/notes",searchNote)
export default web