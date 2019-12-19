import React from "react";
import { TextArea } from "semantic-ui-react";
import TagDisplay from "./TagDisplay";

const TextSelector = ({ article, selectText }) => {
  const { title, source, publishedDateTime, url, text, initialTags } = article;
  console.log(initialTags.length);
  return (
    <div style={{ padding: "1.2rem" }}>
      <a href={url} rel="noreferrer noopener" target="_blank">
        <h1>{title}</h1>
      </a>

      <h2>
        by the {source} <span> published on: {publishedDateTime}</span>{" "}
      </h2>

      <div style={{ textAlign: "center" }}>
        <TextArea
          onMouseUp={() => selectText(window.getSelection().toString())}
          rows={20}
          style={{ width: "90%", padding: "1.2rem" }}
          value={text}
        />
        <TagDisplay tags={initialTags} />
      </div>
    </div>
  );
};

export default TextSelector;
