import React from "react";
import { Button, Header, Modal } from "semantic-ui-react";

const TextSelectModal = ({ open, articleSelectedText, cancelSelection }) => {
  const {
    title,
    source,
    publishedDateTime,
    url,
    selectedText
  } = articleSelectedText;

  return (
    <Modal
      closeIcon
      open={open}
      onClose={() => {
        cancelSelection();
      }}
    >
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
          <div>
            <div>{selectedText}</div>
          </div>
        </Modal.Description>
        <Modal.Actions>
          <Button
            onClick={() => {
              console.log("saved");
            }}
          >
            Save
          </Button>
        </Modal.Actions>
      </Modal.Content>
    </Modal>
  );
};

export default TextSelectModal;
