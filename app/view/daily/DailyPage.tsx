'use client';

import { createTodos, useTodos } from '@/remotes/todos';
import { FormEvent, useState } from 'react';

export function DailyPage() {
  const { data: todos, refetch: refetchTodos } = useTodos();
  const [todoTitle, setTodoTitle] = useState('');

  async function submitTodo(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await createTodos({ title: todoTitle, categoryIndex: 1 });
    refetchTodos();
    setTodoTitle('');
  }

  return (
    <main>
      <form onSubmit={submitTodo}>
        <input
          name="todo"
          value={todoTitle}
          onChange={e => setTodoTitle(e.target.value)}
          required
        />
        <button type="submit">저장</button>
      </form>
      <pre>{JSON.stringify(todos, null, 2)}</pre>
    </main>
  );
}
