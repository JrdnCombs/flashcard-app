import React from "react";
import { useHistory } from "react-router-dom";

function AddCardButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Done
    </button>
  );
}

export default AddCardButton;