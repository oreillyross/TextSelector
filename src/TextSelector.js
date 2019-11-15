import React, { useState } from "react";
import { Form, TextArea, Container, Grid } from "semantic-ui-react";

const TextSelector = article => {
  const [selectedText, setText] = useState("");

  return (
    <div>
      <h1>{article.article.title}</h1>
      <h2>
        by the {article.article.source}{" "}
        <span> published on: {article.article.publishedDateTime}</span>{" "}
      </h2>

      <div style={{ textAlign: "center" }}>
        <TextArea
          onMouseUp={() => {
            setText(document.getSelection().toString());
          }}
          rows={20}
          style={{ width: "90%" }}
          value={article.article.text}
        />
      </div>
      <div>{selectedText}</div>
    </div>
  );
};

export default TextSelector;
