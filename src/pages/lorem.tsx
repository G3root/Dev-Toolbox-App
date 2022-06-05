import { Component, createEffect, createSignal } from "solid-js";
import { invoke } from "@tauri-apps/api/tauri";
import {
  ClipboardButton,
  Column,
  Label,
  TextArea,
  TextInput,
  TwoColumns,
  ErrorMessage,
} from "../components";

const LoremIpsum: Component = () => {
  const [value, setValue] = createSignal("");
  const [input, setInput] = createSignal(20);
  const [error, setError] = createSignal("");

  const handleChange = (e: any) => {
    let value = Number(e.currentTarget.value);
    if (typeof value === "number") {
      setInput(value);
    }
  };

  createEffect(async () => {
    try {
      const loremValue = (await invoke("generate_lorem_ipsum", {
        length: input(),
      })) as string;
      setValue(loremValue);
    } catch (err: any) {
      console.error(err);
      setError(err.message);
    }
  });

  return (
    <TwoColumns>
      <Column title="Input">
        <Label for="no-of-words" classList={{ "mb-2": true }}>
          Number of Words
        </Label>
        <TextInput
          oninput={handleChange}
          value={input()}
          type="number"
          id="no-of-words"
        />
      </Column>
      <Column
        title="Output text"
        renderRight={() => <ClipboardButton value={value()} />}
      >
        <TextArea rows={20} value={value()} disabled />
        <ErrorMessage className="mt-2" message={error()} />
      </Column>
    </TwoColumns>
  );
};

export default LoremIpsum;
