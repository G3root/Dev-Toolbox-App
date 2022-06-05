import type { Component, JSX } from "solid-js";

interface LabelProps extends JSX.LabelHTMLAttributes<HTMLLabelElement> {}

export const Label: Component<LabelProps> = (props) => {
  const { children, ...rest } = props;
  return (
    <label class="block text-sm font-medium text-slate11" {...rest}>
      {children}
    </label>
  );
};
