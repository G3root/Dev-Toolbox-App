import type { Component, JSX } from "solid-js";

interface TextAreaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: Component<TextAreaProps> = (props) => {
  return (
    <textarea
      class="w-full shadow-sm focus:ring-blue-500 focus:border-blue-500 mt-1 block w-full text-sm border border-gray-300 rounded-md disabled:cursor-not-allowed"
      {...props}
    />
  );
};
