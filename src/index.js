import React from "react";
import ReactDOM from "react-dom";
import { text } from "./data";
import TextSelector from "./TextSelector";
import TextSelectModal from "./TextSelectModal";

//TESTING REMOVE
import TagSelect from './TagSelect'
import TagSuggest from './TagSuggest'
import Tag from './Tag'
import Tags from './Tags'

const tags = [
  'Chrome',
  'Google',
  'IOS',
 
]


import "./styles.css";

const article = {
  title: "Google chrome breaks down for business users",
  source: "Tech News ",
  publishedDateTime: "20191115T15:04",
  text: text,
  url: "https://www.bbc.com/news/science-environment-50500980"
};



function App() {
  const [selectedText, setSelectedText] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  const selectText = selectedText => {
    setSelectedText(selectedText);
    if (selectedText !== "") setModalOpen(true);
  };

  const cancelSelection = () => {
    console.log("called");
    setModalOpen(false);
  };

  const saveSnippet = () => {
    const { title, source, publishedDateTime, url } = article;
    console.table({ title, source, publishedDateTime, url, selectedText });
  };

  return (
    <div>
      <TextSelector selectText={selectText} article={article} />
      {selectedText !== "" && (
        <TextSelectModal
          articleSelectedText={{ ...article, selectedText }}
          open={modalOpen}
          cancelSelection={cancelSelection}
          saveSnippet={saveSnippet}
        />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<Tags initialTags={tags}/>, rootElement);
