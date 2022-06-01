import type { Component, JSX } from "solid-js";

interface TextInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: Component<TextInputProps> = (props) => {
  return (
    <input
      type="text"
      class="focus:ring-blue-500 focus:border-blue-500 flex-1 block w-full rounded-md sm:text-sm border-gray-300 "
      {...props}
    />
  );
};
