import { useState } from 'react';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

interface TodoItemProps {
  todo: Todo;
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number) => void;
  onSaveEdit: (id: number, text: string) => void;
  editTodo: string;
  setEditTodo: (text: string) => void;
}

function TodoItem ({ todo, onDeleteTodo, onEditTodo, onSaveEdit }:TodoItemProps) {
  const [newText, setNewText] = useState<string>(todo.text);

  const handleSave = () => {
    onSaveEdit(todo.id, newText);
  };

  return (
    <li>
      {todo.isEditing ? (
        <>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <span>{todo.text}</span>
          <button onClick={() => onEditTodo(todo.id)}>Edit</button>
          <button onClick={() => onDeleteTodo(todo.id)}>Delete</button>
        </>
      )}
    </li>
  );
}

export default TodoItem;
