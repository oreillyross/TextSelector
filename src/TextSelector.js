import React, { useState } from "react";
import { Form, TextArea, Container, Grid } from "semantic-ui-react";

const TextSelector = ({ article, openModal }) => {
  const [selectedText, setText] = useState("");

  return (
    <div>
      <h1>{article.title}</h1>
      <h2>
        by the {article.source}{" "}
        <span> published on: {article.publishedDateTime}</span>{" "}
      </h2>

      <div style={{ textAlign: "center" }}>
        <TextArea
          onMouseUp={() => {
            const text = document.getSelection().toString();
            if (text.trim() === "") {
              alert("empty");
              openModal = false;
            } else {
              setText(text);
              openModal = true;
            }
          }}
          rows={20}
          style={{ width: "90%" }}
          value={article.text}
        />
      </div>
      <div>{selectedText}</div>
    </div>
  );
};

export default TextSelector;
