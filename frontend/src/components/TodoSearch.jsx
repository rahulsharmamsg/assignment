import React from 'react'

export const TodoSearch = ({searchForm,searchTerm,handleSearch}) => {
 
  return (
  <div className="mb-4 flex flex-col md:flex-row items-center gap-4">
  {/* Search Input */}
  <form onSubmit={(e) => e.preventDefault()} className="flex-1 w-full md:w-auto">
    <input
      type="text"
      name='todoItem'
      value={searchTerm.todoItem}
      placeholder="Search todos..."   
      onChange={(e) => handleSearch(e)}
      className="input input-bordered w-full max-w-xs"
    />

    <select   
    name='filterStatus'
    value={searchTerm.filterStatus}
    onChange={(e)=>handleSearch(e)}
    className="select select-bordered"
  >
    <option value="">All</option>
    <option value="completed">Completed</option>
    <option value="pending">Pending</option>
  </select>
  </form>

  {/* Dropdown Filter */}
  
</div>
  )
}
