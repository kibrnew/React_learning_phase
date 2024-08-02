
import TodoItem from './TodoItem';

interface Todo {
  id: number;
  text: string;
  isEditing: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onDeleteTodo: (id: number) => void;
  onEditTodo: (id: number) => void;
  onSaveEdit: (id: number, text: string) => void;
  editTodo: string;
  setEditTodo: (text: string) => void;
}

function TodoList ({ todos, onDeleteTodo, onEditTodo, onSaveEdit, editTodo, setEditTodo }:TodoListProps) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={onDeleteTodo}
          onEditTodo={onEditTodo}
          onSaveEdit={onSaveEdit}
          editTodo={editTodo}
          setEditTodo={setEditTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;
