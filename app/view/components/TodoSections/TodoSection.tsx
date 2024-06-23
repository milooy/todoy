import { createTodos, useTodos } from '@/remotes/todos';
import TodoForm from './TodoForm';
import { FormEvent, useState } from 'react';

export default function TodoSection({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  const { data: todos, refetch: refetchTodos } = useTodos({
    sectionIndex: index,
  });
  const [newTodoTitle, setNewTodoTitle] = useState('');

  async function submitTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createTodos({ title: newTodoTitle, sectionIndex: index });
    refetchTodos();
    setNewTodoTitle('');
  }

  return (
    <section>
      <h2 className="font-bold text-2xl">{title}</h2>
      <ul>{todos?.map(todo => <li key={todo.id}>{todo.title}</li>)}</ul>
      <TodoForm
        value={newTodoTitle}
        onChange={e => setNewTodoTitle(e.target.value)}
        onSubmit={submitTodo}
      />
    </section>
  );
}
