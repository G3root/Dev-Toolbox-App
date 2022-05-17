import type { Component, JSX } from "solid-js";

export const TwoColumns: Component = ({ children }) => {
  return (
    <div className="grid grid-cols-2 divide-x min-h-screen">{children}</div>
  );
};

export const Column: Component<{
  title: string;
  renderRight?: () => JSX.Element;
}> = ({ title, children, renderRight }) => {
  return (
    <div className="p-5">
      <header className="flex items-center justify-between">
        <span className="font-bold text-2xl">{title}</span>
        <div className="flex space-x-3 items-center">
          {renderRight && renderRight()}
        </div>
      </header>
      <div className="mt-5">{children}</div>
    </div>
  );
};
