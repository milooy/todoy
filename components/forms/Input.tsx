import React, { ReactNode } from "react";

const Input = (props: { right?: ReactNode } & React.InputHTMLAttributes<HTMLInputElement>) => {
  return <input {...props} />;
};

export default Input;
