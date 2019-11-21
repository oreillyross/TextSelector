import React, { useState } from "react";
import { Form, TextArea, Container, Grid } from "semantic-ui-react";

const TextSelector = ({ article, selectText }) => {
  
  const {
    title,
    source,
    publishedDateTime,
    url,
    text
   } = article;

  return (
    <div>
      <a href={url} rel="noreferrer noopener" target="_blank">
      <h1>{title}</h1>
            </a>
      
      <h2>
        by the {source}{" "}
        <span> published on: {publishedDateTime}</span>{" "}
      </h2>

      <div style={{ textAlign: "center" }}>
        <TextArea
          onMouseUp={() => selectText(window.getSelection().toString())}
          rows={20}
          style={{ width: "90%" }}
          value={text}
        />
      </div>
    </div>
  );
};

export default TextSelector;
