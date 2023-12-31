import React from "react";
import { useHistory } from "react-router-dom";

function EditCardButton({ deckId }) {
  const history = useHistory();

  return (
    <button
      type="button"
      className="btn btn-secondary mr-2"
      onClick={() => history.push(`/decks/${deckId}`)}
    >
      Cancel
    </button>
  );
}

export default EditCardButton;