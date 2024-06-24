import Input from "@/components/forms/Input";
import React, { ReactNode } from "react";
import MainInputForm from "./MainInputForm";

const Section = ({ children }: { children: ReactNode }) => {
  return <section className="w-1/3 p-4">{children}</section>;
};

const Heading = ({ children }: { children: ReactNode }) => <h2 className="text-xl font-bold mb-4">{children}</h2>;

Section.Heading = Heading;
Section.MainInputForm = MainInputForm;

export default Section;
