import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DeckControls({ deck, handleDelete }) {
    const history = useHistory();

  return (
    <>
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{deck.name}</h5>
          <blockquote className="card-text">{deck.description}</blockquote>
          <div className="row">
            <div>
              <Link to={`/decks/${deck.id}/edit`}>
                <button className="btn btn-secondary">
                  <i className="bi bi-pencil-fill"></i>Edit
                </button>
              </Link>
              <Link to={`/decks/${deck.id}/study`}>
                <button className="btn btn-primary">
                  <i className="bi bi-highlighter"></i>Study
                </button>
              </Link>
              <Link to={`/decks/${deck.id}/cards/new`}>
                <button className="btn btn-primary">
                  <i className="bi bi-file-plus"></i>Add Cards
                </button>
              </Link>
            </div>
            <div className="ml-auto">
              <button
                className="btn btn-danger btn-block"
                onClick={() => {
                  handleDelete(deck.id);
                  history.push("/");
                }}
              >
                <i className="bi bi-trash3"></i>Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default DeckControls;
