import { Component, createSignal } from "solid-js";
import { Column, ErrorMessage, TextArea, TwoColumns } from "../components";

export const UrlEncode: Component = () => {
  const [encoded, setEncoded] = createSignal("");
  const [decoded, setDecoded] = createSignal("");
  const [encodingError, setEncodingError] = createSignal("");
  const [decodingError, setDecodingError] = createSignal("");

  const clearErrors = () => {
    setEncodingError("");
    setDecodingError("");
  };

  const handleDecodedChange = (e: any) => {
    const value = e.target.value;
    setDecoded(value);
    clearErrors();
    try {
      const result = encodeURIComponent(value);
      setEncoded(result);
    } catch (err: any) {
      console.error(err);
      setEncodingError(err.message);
    }
  };

  const handleEncodedChange = (e: any) => {
    const value = e.target.value;
    setEncoded(value);
    clearErrors();
    try {
      const result = decodeURIComponent(value);
      setDecoded(result);
    } catch (err: any) {
      console.error(err);
      setDecodingError(err.message);
    }
  };

  return (
    <TwoColumns>
      <Column title="URL">
        <TextArea rows={10} value={decoded()} onInput={handleDecodedChange} />
        <ErrorMessage className="mt-2" message={encodingError()} />
      </Column>
      <Column title="Encoded URL">
        <TextArea rows={10} value={encoded()} onInput={handleEncodedChange} />
        <ErrorMessage className="mt-2" message={decodingError()} />
      </Column>
    </TwoColumns>
  );
};
