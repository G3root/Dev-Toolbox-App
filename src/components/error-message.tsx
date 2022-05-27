import { Component, JSX, Show, splitProps } from "solid-js";

interface ErrorMessageProps extends JSX.HTMLAttributes<HTMLDivElement> {
  message: string;
}

export const ErrorMessage: Component<ErrorMessageProps> = (props) => {
  const [local, others] = splitProps(props, ["message"]);
  return (
    <Show when={local.message || local.message !== ""}>
      <div class="text-white bg-red-500 rounded-lg px-3 py-3 flex" {...others}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 inline mt-[2px]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecapp="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <div class="flex-1 pl-2">{local.message}</div>
      </div>
    </Show>
  );
};
