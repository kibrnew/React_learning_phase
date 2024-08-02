import React, { useState } from 'react';

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

function TodoForm ({ onAddTodo }:TodoFormProps)  {
  const [newTodo, setNewTodo] = useState<string>('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    onAddTodo(newTodo);
    setNewTodo('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newTodo}
        onChange={(e) => setNewTodo(e.target.value)}
        placeholder="Add a new task"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoForm;
