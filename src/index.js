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
  text: text,
  url: "https://www.bbc.com/news/science-environment-50500980"
};

const initialTags = ["Chrome", "Google"];

function TextSelect({ article }) {
  
  const [selectedText, setSelectedText] = React.useState("");
  const [modalOpen, setModalOpen] = React.useState(false);
  
  const [tags, setTags] = React.useState(initialTags);

  const selectText = selectedText => {
    setSelectedText(selectedText);
    if (selectedText !== "") setModalOpen(true);
  };

  
  const cancelSelection = () => {
    setModalOpen(false);
  };

  const saveSnippet = () => {
    const { title, source, publishedDateTime, url } = article;
    console.table({ title, source, publishedDateTime, url, selectedText, tags });
  };

  const onTagDelete = (name) => {
    const newTags = tags.filter(tag => tag !== name)
    setTags(newTags)
  }

const addTag = (value) => {
  if (!tags.includes(value)) {
    setTags([...tags, value])
  }
  
}

  return (
    <div>
      <TextSelector selectText={selectText} article={article} />
      {selectedText !== "" && (
        <TextSelectModal
          articleSelectedText={{ ...article, selectedText, tags }}
          open={modalOpen}
          cancelSelection={cancelSelection}
          saveSnippet={saveSnippet}
          onTagDelete={onTagDelete}
          addTag={addTag}
        />
      )}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TextSelect article={article} />, rootElement);
