import Input from "@/components/forms/Input";
import React, { ReactNode } from "react";

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="w-1/3 p-4">{children}</section>;
};

const Heading = ({ children }: { children: ReactNode }) => <h2 className="text-xl font-bold mb-4">{children}</h2>;
const MainInputForm = ({ onSubmit }: { onSubmit: React.FormEventHandler<HTMLFormElement> }) => (
  <form onSubmit={onSubmit}>
    <Input className="w-full border p-2 mb-4" type="text" placeholder="Add... #" />
  </form>
);
Section.Heading = Heading;
Section.MainInputForm = MainInputForm;

export default Section;
