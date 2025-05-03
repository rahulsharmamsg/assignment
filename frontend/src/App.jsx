import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from './utils/common';

function App() {
  const [notes, setNotes] = useState([]);
  const [filterNotes,setFilterNotes] = useState([])
  const [searchTerm, setSearchTerm] = useState("");
  const [title, setTitle] = useState("");
  const [addNote, setaddNote] = useState({
    title:"",
    content:""
  });
  console.log(addNote,'note')

  const handleDelete = async(deleteId) => {
    const res = await axios.delete(BASE_URL + '/notes/'+deleteId);
    if(res){
      toast("Notes deleted successfully...");
      fetchNote()
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filterData = filterNotes.filter((note) => 
      note.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
      note.content.toLowerCase().includes(searchTerm.toLowerCase()) || 
      note.catfact.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setNotes(filterData)
    setSearchTerm("")
  };

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(BASE_URL + '/notes', addNote);
      if (res) {
        toast("Note added successfully...");
        setaddNote({
          title: "",
          content: ""
        });
        fetchNote();
      }
    } catch (error) {
      toast.error("Failed to add note");
    }
  }
const handleChange = (e)=>{
  const {name,value} = e.target;
setaddNote((prev)=>{
return {
  ...prev,
  [name]:value
}
})
}
  const fetchNote = async()=>{
    try {
      const res = await axios.get(BASE_URL + '/notes');
      setNotes(res.data.noteList);
      setFilterNotes(res.data.noteList)
      setSearchTerm("");
    } catch (error) {
      console.error("Axios fetch error:", error.message);
    }
  }

  useEffect(()=>{
    fetchNote()
  },[])

  return (
    <div className="container mx-auto p-8">
      
      {/* Add Note Form */}
      <div className="mb-6">
        <form onSubmit={handleAddNote} className="space-y-4">
          <input
            type="text"
            placeholder="Note title"
            name='title'
            value={addNote.title}
            onChange={(e) => handleChange(e) }
            className="input input-bordered w-full"
            required
          />
          <textarea
            placeholder="Note content"
            value={addNote.content}
            name='content'
            onChange={(e) => handleChange(e) }
            className="textarea textarea-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">Add Note</button>
        </form>
      </div>

      {/* Search Form */}
      <div className="mb-4">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search notes..."
            value={searchTerm}
            onChange={(e)=>setSearchTerm(e.target.value)}
            className="input input-bordered w-full max-w-xs"
          />
        </form>
      </div>

      {/* Notes List */}
      <div className="space-y-4">
        {notes?.length === 0 ? (
          <div className="alert alert-warning">
            <span>No notes found</span>
          </div>
        ) : (
          notes?.map((note, index) => (
            <div key={index} className="card card-bordered bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{note.title}</h2>
                <p>{note.content}</p>
                <p className="text-sm text-gray-500">{note.catfact}</p>
                <div className="card-actions justify-end">
                  <button
                    onClick={() => handleDelete(note._id)}
                    className="btn btn-error btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      <ToastContainer />
    </div>
  );
}

export default App
