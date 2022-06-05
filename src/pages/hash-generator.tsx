import { Component, createEffect, createSignal, For, Show } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import {
  ClipboardButton,
  CodeBlock,
  Column,
  TextArea,
  TwoColumns,
} from "../components";
import { NameValueResp } from "../types";

const HashGenerator: Component = () => {
  const [input, setInput] = createSignal("");
  const [value, setValue] = createSignal<NameValueResp>([]);

  createEffect(async () => {
    if (input() !== "") {
      const res = (await invoke("hash_generator", {
        text: input(),
      })) as NameValueResp;
      setValue(res);
    }
  });
  return (
    <TwoColumns>
      <Column title="Input">
        <TextArea
          value={input()}
          rows={10}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
      </Column>
      <Column title="Result">
        <Show when={input() !== ""}>
          <div class="grid grid-cols-1 gap-8">
            <For each={value()}>
              {(item) => (
                <div>
                  <div class="mb-3 flex items-center justify-between">
                    <span>{item.name}</span>
                    <ClipboardButton value={item.value} />
                  </div>
                  <CodeBlock code={item.value} />
                </div>
              )}
            </For>
          </div>
        </Show>
      </Column>
    </TwoColumns>
  );
};

export default HashGenerator;
