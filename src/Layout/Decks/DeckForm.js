import React from "react";
import Deck from "./Deck";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function DeckForm({ handleSubmit, formData, setFormData}) {
  
    const handleChange = ({ target }) => {
    setFormData({
      ...formData,
      [target.name]: target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Deck name:</label>
        <input
          className="form-control"
          id="name"
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
          required
        />
      </div>
      <div className="form-group">
        <label htmlFor="name">Deck Description</label>
        <textarea
          className="form-control"
          id="description"
          name="description"
          onChange={handleChange}
          value={formData.description}
          required
          rows="3"
        ></textarea>
      </div>
      <Link to="/">
        <button type="button" className="btn btn-secondary btn-small">
          Cancel
        </button>
      </Link>
      <button type="submit" className="btn btn-primary btn-small">
        Submit
      </button>
    </form>
  );
}

export default DeckForm;
