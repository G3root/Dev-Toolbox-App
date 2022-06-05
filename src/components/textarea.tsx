import type { Component, JSX } from "solid-js";

interface TextAreaProps
  extends JSX.TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea: Component<TextAreaProps> = (props) => {
  return (
    <textarea
      class="bg-low-contrast w-full shadow-sm focus:ring-violet7 focus:border-violet7 hover:border-violet8 mt-1 block w-full text-sm border border-slate7 rounded-md disabled:cursor-not-allowed"
      {...props}
    />
  );
};
