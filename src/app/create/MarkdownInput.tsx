"use client";
import React from "react";
import type { FC } from "react";
import Markdown from "react-markdown";

type MarkdownInputProps = { name: string };
const MarkdownInput: FC<MarkdownInputProps> = ({ name }) => {
  const [markdown, setMarkdown] = React.useState("");
  return (
    <section className="grid w-full grid-cols-2 py-2">
      <textarea
        name={name}
        className="h-96 w-full text-black"
        value={markdown}
        placeholder="Enter markdown here..."
        onChange={(e) => setMarkdown(e.target.value)}
      />
      <MarkdownPreview markdown={markdown} />
    </section>
  );
};

export default MarkdownInput;

type MarkdownPreviewProps = { markdown: string };

const MarkdownPreview: FC<MarkdownPreviewProps> = ({ markdown }) => {
  return (
    <div className="mx-2 bg-black p-5 text-white">
      <Markdown>{markdown}</Markdown>
    </div>
  );
};
