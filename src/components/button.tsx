import { Component, JSX } from "solid-js";

interface ButtonProps extends JSX.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: Component<ButtonProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <button
      class=" cursor-pointer leading-none transition-all font-semibold px-4 py-2 text-sm opacity-100 rounded-md text-gray-700 hover:text-gray-800 shadow-xs bg-white border border-gray-400 border-opacity-30  hover:border-opacity-50 hover:shadow-sm"
      {...rest}
    >
      {children}
    </button>
  );
};
