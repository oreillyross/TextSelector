import React from "react";
import ReactDOM from "react-dom";
import { text } from "./data";
import TextSelector from "./TextSelector";
import TextSelectModal from "./TextSelectModal";

import "./styles.css";

const article = {
  title: "Google chrome breaks down for business users",
  source: "Tech News ",
  publishedDateTime: "20191115T15:04",
  text: text
};

function App() {
  const selectText = selectedText => {
    console.log(selectedText);
  };
  return (
    <div>
      <TextSelector selectText={selectText} article={article} />;
      <TextSelectModal />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
