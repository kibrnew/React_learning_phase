import { useState } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

function App () {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editTodo, setEditTodo] = useState<string>('');

  const handleAddTodo = (text: string) => {
    const newTask: Todo = { id: Date.now(), text, isEditing: false };
    setTodos([...todos, newTask]);
  };

  const handleDeleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const handleEditTodo = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, isEditing: true } : todo)));
  };

  const handleSaveEdit = (id: number, text: string) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, text, isEditing: false } : todo)));
  };

  return (
    <div className="App">
      <h1>To-Do App</h1>
      <TodoForm onAddTodo={handleAddTodo} />
      <TodoList
        todos={todos}
        onDeleteTodo={handleDeleteTodo}
        onEditTodo={handleEditTodo}
        onSaveEdit={handleSaveEdit}
        editTodo={editTodo}
        setEditTodo={setEditTodo}
      />
    </div>
  );
}

export default App;
