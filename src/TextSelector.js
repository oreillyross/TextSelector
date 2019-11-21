import React, { useState } from "react";
import { Form, TextArea, Container, Grid } from "semantic-ui-react";

const TextSelector = ({ article, selectText }) => {
  return (
    <div>
      <h1>{article.title}</h1>
      <h2>
        by the {article.source}{" "}
        <span> published on: {article.publishedDateTime}</span>{" "}
      </h2>

      <div style={{ textAlign: "center" }}>
        <TextArea
          onMouseUp={() => selectText(window.getSelection().toString())}
          rows={20}
          style={{ width: "90%" }}
          value={article.text}
        />
      </div>
    </div>
  );
};

export default TextSelector;
