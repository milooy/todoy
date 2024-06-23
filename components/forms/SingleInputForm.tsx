import { ChangeEventHandler, FormEvent } from "react";
import Input from "./Input";

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
      <Input name="todo" value={value} onChange={onChange} required />
    </form>
  );
}
