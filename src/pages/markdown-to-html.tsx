import { Component, createEffect, createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import {
  Column,
  TwoColumns,
  ErrorMessage,
  TextArea,
  ClipboardButton,
  Button,
} from "../components";

const sample = `

Heading
=======
## Sub-heading
Paragraphs are separated
by a blank line.
Two spaces at the end of a line
produces a line break.
Text attributes _italic_,
**bold**, \`monospace\`.
Horizontal rule:
---
Bullet list:
  * apples
  * oranges
  * pears
Numbered list:
  1. wash
  2. rinse
  3. repeat
A [link](http://example.com).
![Image](https://via.placeholder.com/150)
> Markdown uses email-style > characters for blockquoting.

`;

const MarkdownToHtml: Component = () => {
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
        renderRight={() => (
          <div class="flex space-x-3">
            <Button onClick={() => setInput(sample)}>sample</Button>
            <ClipboardButton value={input()} />
          </div>
        )}
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

export default MarkdownToHtml;
