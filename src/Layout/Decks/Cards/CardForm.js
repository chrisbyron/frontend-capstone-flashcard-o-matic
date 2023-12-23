import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function CardForm({ handleSubmit, formData, setFormData, deckId, write }) {
  const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Front</label>
        <textarea
          className="form-control"
          id="front"
          name="front"
          onChange={handleChange}
          value={formData.front}
          required
          rows="2"
        ></textarea>
        <label htmlFor="name">Back</label>
        <textarea
          className="form-control"
          id="back"
          name="back"
          onChange={handleChange}
          value={formData.back}
          required
          rows="2"
        ></textarea>
      </div>
      <Link to={`/decks/${deckId}`}>
        <button type="button" className="btn btn-secondary btn-small">
          Cancel
        </button>
      </Link>
      <input type="submit" className="btn btn-primary btn-small" value={write} />
    </form>
  );
}

export default CardForm;
