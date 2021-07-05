
import React from 'react';
const Events = () =>{
  const [todoList, setTodoList] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState(null);
  const [editingText, setEditingText] = React.useState("");


  const handleSubmit = (event) => {
    event.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodoList([...todoList].concat(newTodo));
    setTodo("");
  }

  const deleteTodo = (id) => {
    let updatedTodos = [...todoList].filter((todo) => todo.id !== id);
    setTodoList(updatedTodos);
  }

  const toggleComplete =(id) => {
    let updatedTodos = [...todoList].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodoList(updatedTodos);
  }


  return (
    <div id="todo-list">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(event) => setTodo(event.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo Event</button>
      </form>
      {todoList.map((todo) => (
        <div key={todo.id} className="todo">
          <div className="todo-text">
            <input
              type="checkbox"
              id="completed"
              checked={todo.completed}
              onChange={() => toggleComplete(todo.id)}
            />
            {todo.id === todoEditing ? (
              <input
                type="text"
                onChange={(event) => setEditingText(event.target.value)}
              />
            ) : (
              <div>{todo.text}</div>
            )}
          </div>
          <div className="todo-actions">

            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Events;