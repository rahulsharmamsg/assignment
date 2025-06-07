import { useEffect, useState } from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import { BASE_URL } from '../utils/common.js';
import { TodoList } from './TodoList.jsx';
import { TodoSearch } from './TodoSearch.jsx';

export const Todo = () => {
  const [addNote, setaddNote] = useState("");
  const [allNotes, setAllNotes] = useState(() => {
    const saved = localStorage.getItem('alltodo');
    return saved ? JSON.parse(saved) : [];
  });
  const [todo, setTodo] = useState(allNotes); // this is what we render
  const [searchTerm, setSearchTerm] = useState({
    todoItem: "",
    filterStatus: ''
  });

  useEffect(() => {
    localStorage.setItem('alltodo', JSON.stringify(allNotes));
  }, [allNotes]);

  const handleAddNote = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://dummyjson.com/todos/add", {
        todo: addNote,
        completed: true,
        userId: 5
      });
      if (res.status === 201) {
        toast("Todo added successfully...");
        const newList = [...allNotes, res.data];
        setAllNotes(newList);
        setTodo(newList); // reflect in visible list
        setaddNote("");
      }
    } catch (error) {
      toast.error("Failed to add note");
    }
  };

  const handleSearch = (e) => {
    console.log(e.target.value)
    const { name, value } = e.target;
    setSearchTerm((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(()=>{
  
    const filterData = allNotes.filter((note) => {
      const matchesText = note.todo.toLowerCase().includes(searchTerm.todoItem.toLowerCase());
      const matchesStatus =
        searchTerm.filterStatus === '' ||
        (searchTerm.filterStatus === "completed" && note.completed) ||
        (searchTerm.filterStatus === "pending" && !note.completed);

      return matchesText && matchesStatus;
    });
    setTodo(filterData);
  },[searchTerm,allNotes])
  const handleDelete = async(deleteIndex) => {
   const updatedNotes = allNotes.filter((_, index) => index !== deleteIndex);
  localStorage.setItem('alltodo', JSON.stringify(updatedNotes));
  setAllNotes(updatedNotes);
  setTodo(updatedNotes);
  toast("Note deleted successfully...");
  };

  const handleToggleComplete = (index) => {
  const updatedNotes = allNotes.map((note, i) => {
    if (i === index) {
      return { ...note, completed: !note.completed };
    }
    return note;
  });

  setAllNotes(updatedNotes);
  setTodo(updatedNotes);
  localStorage.setItem('alltodo', JSON.stringify(updatedNotes));
};
  return (
    <div className="container mx-auto p-8">
      {/* Add Note Form */}
      <div className="mb-6">
        <form onSubmit={handleAddNote} className="space-y-4">
          <input
            type="text"
            placeholder="Todo"
            value={addNote}
            onChange={(e) => setaddNote(e.target.value)}
            className="input input-bordered w-full"
            required
          />
          <button type="submit" className="btn btn-primary w-full">Add Todo</button>
        </form>
      </div>

      {/* Search Form */}
      <TodoSearch
        handleSearch={handleSearch}
        searchTerm={searchTerm}
       
      />

      {/* Notes List */}
      <TodoList todo={todo} handleDelete={handleDelete} handleToggleComplete={handleToggleComplete} />

      <ToastContainer />
    </div>
  );
};
