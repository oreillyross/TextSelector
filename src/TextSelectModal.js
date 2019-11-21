import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const TextSelectModal = ({ open, articleSelectedText, cancelSelection }) => {
  const {
    title,
    source,
    publishedDateTime,
    url,
    selectedText
  } = articleSelectedText;

  return (
    <Modal open={open}>
      <Modal.Header>Selected information / event</Modal.Header>
      <Modal.Content image>
        <Modal.Description>
          <Header>
            <a href={url} rel="noreferrer noopener" target="_blank">
              {title}
            </a>
          </Header>
          <p>
            by {source} <span>published on {publishedDateTime}</span>
          </p>
          <p>{selectedText}</p>
        </Modal.Description>
        <Button
          onClick={() => {
            console.log("saved");
          }}
        >
          Save
        </Button>
        <Button onClick={() => cancelSelection()}>Cancel</Button>
      </Modal.Content>
    </Modal>
  );
};

export default TextSelectModal;
