import { useState } from 'react';

function Todos() {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const [filter, setFilter] = useState('all');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos([...todos, { text: newTodo, completed: false }]);
    setNewTodo('');
  };

  const toggleComplete = (index) => {
    const updatedTodos = [...todos];
    updatedTodos[index].completed = !updatedTodos[index].completed;
    setTodos(updatedTodos);
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const filteredTodos = todos.filter((todo) => {
    if (filter === 'completed') return todo.completed;
    if (filter === 'incomplete') return !todo.completed;
    return true;
  });

  return (
    <div>
      <h2 className="pageTitle">Mission Board</h2>

      <div className="missionGrid">
        {/* Left column */}
        <div className="card">
          <form className="missionForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Enter new mission"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
            <button type="submit">Add</button>
          </form>

          <div className="filters">
            <button
              className={filter === 'all' ? 'active' : ''}
              onClick={() => setFilter('all')}
            >
              All
            </button>
            <button
              className={filter === 'completed' ? 'active' : ''}
              onClick={() => setFilter('completed')}
            >
              Completed
            </button>
            <button
              className={filter === 'incomplete' ? 'active' : ''}
              onClick={() => setFilter('incomplete')}
            >
              Incomplete
            </button>
          </div>
        </div>

        {/* Right column */}
        <div className="card">
          <ul className="missionList">
            {filteredTodos.map((todo, index) => (
              <li key={index} className="missionItem">
                <span
                  className={`missionText ${
                    todo.completed ? 'completed' : ''
                  }`}
                  onClick={() => toggleComplete(index)}
                >
                  {todo.text}
                </span>

                <button
                  className="removeBtn"
                  type="button"
                  onClick={() => removeTodo(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Todos;

