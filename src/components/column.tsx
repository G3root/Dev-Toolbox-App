import type { Component, JSX } from "solid-js";

export const TwoColumns: Component = ({ children }) => {
  return (
    <div class="grid grid-cols-1 lg:grid-cols-2 divide-x divide-slate6 h-full">
      {children}
    </div>
  );
};

export const Column: Component<{
  title: string;
  renderRight?: () => JSX.Element;
}> = ({ title, children, renderRight }) => {
  return (
    <div class="p-5 overflow-auto max-h-[93vh]">
      <header class="flex items-center justify-between">
        <span class="font-bold text-2xl">{title}</span>
        <div class="flex space-x-3 items-center">
          {renderRight && renderRight()}
        </div>
      </header>
      <div class="mt-5">{children}</div>
    </div>
  );
};
