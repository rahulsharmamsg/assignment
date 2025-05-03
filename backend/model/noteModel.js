import mongoose from "mongoose";

// Define schema with timestamps
const noteSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        catfact: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true, // adds createdAt and updatedAt fields
    }
);

// Create and export model
const Note = mongoose.model("Note", noteSchema);
export default Note;
