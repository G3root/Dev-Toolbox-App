import type { Component } from "solid-js";
import {
  Column,
  TwoColumns,
  ErrorMessage,
  TextArea,
  ClipboardButton,
} from "../components";
import { createSignal } from "solid-js";

export const Base64: Component = () => {
  const [encoded, setEncoded] = createSignal("");
  const [decoded, setDecoded] = createSignal("");
  const [encodingError, setEncodingError] = createSignal("");
  const [decodingError, setDecodingError] = createSignal("");

  const clearErrors = () => {
    setEncodingError("");
    setDecodingError("");
  };

  const handleDecodedChange = (e: any) => {
    const value = e.currentTarget.value;
    setDecoded(value);
    clearErrors();
    try {
      const result = btoa(unescape(encodeURIComponent(value)));
      setEncoded(result);
    } catch (err: any) {
      console.error(err);
      setEncodingError(err.message);
    }
  };

  const handleEncodedChange = (e: any) => {
    const value = e.currentTarget.value;
    setEncoded(value);
    clearErrors();
    try {
      const result = decodeURIComponent(escape(atob(value)));
      setDecoded(result);
    } catch (err: any) {
      console.error(err);
      setDecodingError(err.message);
    }
  };

  return (
    <TwoColumns>
      <Column
        title="Text"
        renderRight={() => <ClipboardButton value={decoded()} />}
      >
        <TextArea
          value={decoded()}
          onInput={handleDecodedChange}
          rows={10}
          id="input-el"
        />
        <ErrorMessage classList={{ "mt-2": true }} message={encodingError()} />
      </Column>
      <Column
        title="Encoded"
        renderRight={() => <ClipboardButton value={encoded()} />}
      >
        <TextArea
          value={encoded()}
          onInput={handleEncodedChange}
          rows={10}
          id="input-el"
        />
        <ErrorMessage classList={{ "mt-2": true }} message={decodingError()} />
      </Column>
    </TwoColumns>
  );
};
