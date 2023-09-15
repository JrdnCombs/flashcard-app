import React from "react";

function AddEditCardForm({ cardFront, handleCardFrontChange, cardBack, handleCardBackChange }) {
  return (
    <div>
      <div className="form-group">
        <label htmlFor="cardFront">Front</label>
        <textarea
          id="cardFront"
          name="cardFront"
          className="form-control"
          placeholder="Front side of card"
          rows="3"
          onChange={handleCardFrontChange}
          value={cardFront}
        />
      </div>
      <div className="form-group">
        <label htmlFor="cardBack">Back</label>
        <textarea
          id="cardBack"
          name="cardBack"
          className="form-control"
          placeholder="Back side of card"
          rows="3"
          onChange={handleCardBackChange}
          value={cardBack}
        />
      </div>
    </div>
  );
}

export default AddEditCardForm;