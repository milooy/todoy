import { ChangeEventHandler, FormEvent } from 'react';

export default function TodoForm({
  value,
  onSubmit,
  onChange,
}: {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  onSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit}>
      <input name="todo" value={value} onChange={onChange} required />
      <button type="submit">저장</button>
    </form>
  );
}
