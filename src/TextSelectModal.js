import React from "react";
import { Button, Header, Image, Modal } from "semantic-ui-react";

const TextSelectModal = ({ open, selectedText, cancelSelection }) => (
  <Modal open={open}>
    <Modal.Header>Select a Photo</Modal.Header>
    <Modal.Content image>
      <Image
        wrapped
        size="medium"
        src="https://react.semantic-ui.com/images/avatar/large/rachel.png"
      />
      <Modal.Description>
        <Header>Default Profile Image</Header>
        <p>{selectedText}</p>
        <p>Is it okay to use this photo?</p>
      </Modal.Description>
      <button onClick={() => cancelSelection()}>Cancel</button>
    </Modal.Content>
  </Modal>
);

export default TextSelectModal;
