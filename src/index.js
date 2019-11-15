import React from "react";
import ReactDOM from "react-dom";
import { text } from "./data";
import TextSelector from "./TextSelector";

import "./styles.css";

const article = {
  title: "Google chrome breaks down for business users",
  source: "Tech News ",
  publishedDateTime: "20191115T15:04",
  text: text
};

function App() {
  return <TextSelector article={article} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
