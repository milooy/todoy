import Input from "@/components/forms/Input";
import React, { useState } from "react";

const MainInputForm = ({ onSubmit }: { onSubmit: (e: React.FormEvent<HTMLFormElement>, { value }: { value: string }) => Promise<void> }) => {
  const [value, setValue] = useState("");
  console.log({ value });

  return (
    <form
      onSubmit={async (e) => {
        try {
          await onSubmit(e, { value });
          setValue("");
        } catch (e) {
          throw e;
        }
      }}
    >
      <Input onChange={(e) => setValue(e.target.value)} className="w-full border p-2 mb-4" type="text" placeholder="Add... #" value={value} />
    </form>
  );
};

export default MainInputForm;
