import { Component, createSignal, Show } from "solid-js";
import { Column, TwoColumns, ClipboardButton, CodeBlock } from "../components";

 const Base64Image: Component = () => {
  const [result, setResult] = createSignal("");

  const handleChange = (e: any) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      if (reader.result) {
        setResult(reader.result.toString());
      }
    };
    reader.onerror = (err) => {
      alert(err);
    };
    reader.readAsDataURL(file);
  };

  return (
    <TwoColumns>
      <Column title="Image">
        <input type="file" accept="image/*" onChange={handleChange} />
        <Show when={result() !== ""}>
          <div className="mt-5">
            <img src={result()} />
          </div>
        </Show>
      </Column>
      <Column
        title="Result"
        renderRight={() => <ClipboardButton value={result()} />}
      >
        <Show when={result() !== ""}>
          <Show when={result().length > 500}>
            <div className="mb-1 text-zinc-400">
              Too large, only showing the first 500 characters:
            </div>
          </Show>
          <CodeBlock
            code={`${result().slice(0, 500)}${
              result.length > 500 ? `...` : ``
            }`}
          />
        </Show>
      </Column>
    </TwoColumns>
  );
};


export default Base64Image