import Note from "../model/noteModel.js";
import axios from "axios";
const NoteAdd = async (req, res) => {
    try {
        const reqBody = {
            title: req.body.title,
            content: req.body.content
        }
        const fetchFact = await axios.get("https://catfact.ninja/fact")
        if (!fetchFact) {
            throw new Error("Fact Api Not Working")
        }
        reqBody.catfact = fetchFact.data.fact
        const note = new Note(reqBody);
        const data = await note.save();
        res.send({ msg: "Notes added..", data: data })
    } catch (error) {
        res.status(500).json({ message: error.message });

    }
}
const deleteNote = async (req, res) => {
    try {
        const noteId = req.params.deleteId;      
        const checkExist = await Note.findById(noteId);
        if (!checkExist) {
            throw new Error("Note not found");
        }
        const delNote = await Note.findByIdAndDelete(noteId)
        res.send({ msg: "Notes deleted..", delNote })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const searchNote = async(req,res)=>{
    try {
        const noteId = req.params.deleteId;      
        const checkExist = await Note.findById(noteId);
        if (!checkExist) {
            throw new Error("Note not found");
        }
        const delNote = await Note.findByIdAndDelete(noteId)
        res.send({ msg: "Notes deleted..", delNote })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getNote = async(req,res)=>{
    try {    
        const noteList = await Note.find({},{createdAt:0,updatedAt:0});
        if (!noteList) {
            throw new Error("Note not found");
        }
        res.send({ msg: "All Notes..", noteList })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
export {
    NoteAdd,
    deleteNote,
    searchNote,
    getNote
}