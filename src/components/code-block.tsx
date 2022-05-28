import { Component } from "solid-js";

interface ButtonProps {
  code: string;
}

export const CodeBlock: Component<ButtonProps> = (props) => {
  return (
    <pre class="border rounded-lg p-3 overflow-auto">
      <code class="break-all whitespace-pre-wrap">{props.code}</code>
    </pre>
  );
};
