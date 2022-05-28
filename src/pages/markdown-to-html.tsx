import { Component, createEffect, createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Column,
  TwoColumns,
  ErrorMessage,
  TextArea,
  ClipboardButton,
} from "../components";

export const MarkdownToHtml: Component = () => {
  const [input, setInput] = createSignal("");
  const [output, setOutput] = createSignal("");
  const [error, setError] = createSignal("");

  createEffect(async () => {
    setError("");
    if (!input()) return;
    try {
      const markdown = (await invoke("generate_html", {
        markdown: input(),
      })) as string;
      setOutput(markdown);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  });

  return (
    <TwoColumns>
      <Column
        title="Markdown"
        renderRight={() => <ClipboardButton value={input()} />}
      >
        <TextArea
          oninput={(e) => setInput(e.currentTarget.value)}
          rows={20}
          id="input-el"
          value={input()}
        />
        <ErrorMessage className="mt-2" message={error()} />
      </Column>
      <Column
        title="HTML"
        renderRight={() => <ClipboardButton value={output()} />}
      >
        <TextArea value={output()} disabled rows={20} id="input-el" />
      </Column>
    </TwoColumns>
  );
};
