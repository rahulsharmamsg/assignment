export const TodoList = ({ todo, handleDelete, handleToggleComplete }) => {
  return (
    <div className="space-y-4">
      {todo?.length === 0 ? (
        <div className="alert alert-warning">
          <span>No todo found</span>
        </div>
      ) : (
        todo?.map((note, index) => (
          <div 
            key={index} 
            className="card card-bordered bg-base-100 shadow-xl"
            onClick={() => handleToggleComplete(index)}
          >
            <div className="card-body cursor-pointer">
              <h2 className={`card-title ${note.completed ? 'line-through' : ''}`}>
                {note.todo}
              </h2>
              <p className={`text-sm ${note.completed ? 'text-green-600' : 'text-red-500'}`}>
                {note.completed ? 'Completed' : 'Incomplete'}
              </p>
              <div className="card-actions justify-end">
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // prevent toggle when clicking delete
                    handleDelete(index);
                  }}
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
  );
};
