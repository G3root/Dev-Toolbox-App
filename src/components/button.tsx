import { Component, JSX } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: Component<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      class=" cursor-pointer  font-semibold px-4 py-2 text-sm  rounded-md text-slate11 bg-slate3 hover:bg-slate4 "
      {...rest}
    >
      {children}
    </button>
  );
};
