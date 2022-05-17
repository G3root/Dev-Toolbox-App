import type { Component } from "solid-js";
import { Column, TwoColumns, ErrorMessage, TextArea } from "../components";
import { createSignal, createEffect } from "solid-js";

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

  createEffect(() => {
    console.log("encodingError :", encodingError());
  });
  createEffect(() => {
    console.log("decodingError :", decodingError());
  });
  return (
    <TwoColumns>
      <Column title="Text">
        <ErrorMessage classList={{ "mb-2": true }} message={encodingError()} />
        <TextArea
          value={decoded()}
          onInput={handleDecodedChange}
          rows={10}
          id="input-el"
        />
      </Column>
      <Column title="Encoded">
        <ErrorMessage classList={{ "mb-2": true }} message={decodingError()} />
        <TextArea
          value={encoded()}
          onInput={handleEncodedChange}
          rows={10}
          id="input-el"
        />
      </Column>
    </TwoColumns>
  );
};
