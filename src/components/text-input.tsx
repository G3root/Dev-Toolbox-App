import type { Component, JSX } from "solid-js";

interface TextInputProps extends JSX.InputHTMLAttributes<HTMLInputElement> {}

export const TextInput: Component<TextInputProps> = (props) => {
  return (
    <input
      type="text"
      class="bg-low-contrast focus:ring-violet7 focus:border-violet7 hover:border-violet8 flex-1 block w-full rounded-md sm:text-sm border-slate7 "
      {...props}
    />
  );
};
