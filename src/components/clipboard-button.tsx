import copy from "copy-text-to-clipboard";
import { Component, createSignal } from "solid-js";
import { Button } from "./button";

export const ClipboardButton: Component<{ value: string }> = (props) => {
  const [copied, setCopied] = createSignal(false);
  return (
    <Button
      onClick={() => {
        copy(props.value);
        setCopied(true);
        setTimeout(() => {
          setCopied(false);
        }, 2000);
      }}
      classList={{
        "flex space-x-2 flex-none items-center justify-center": true,
      }}
    >
      <svg
        aria-hidden={true}
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width={2}
        classList={{ "hidden ": copied() }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
        />
      </svg>
      <svg
        aria-hidden={true}
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width={2}
        classList={{ "hidden ": !copied() }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
        />
      </svg>

      <span class="ml-1">{copied() ? "Copied!" : "Copy"}</span>
    </Button>
  );
};
