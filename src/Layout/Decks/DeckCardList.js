import React from "react";
import Deck from "./Deck";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { deleteCard } from "../../utils/api";

function DeckCardList({cards}) {
    const {deckId} = useParams();
    
    const handleDelete = (cardId) => {
        if (window.confirm("Delete this card?\n\nYou will not be able to recover it.")) {
            deleteCard(cardId)
        }

    }

    const cardList = cards.map((card, index) => {
        //Todo: wrap in DeckCard.js
      return (
        <div className="card" key={index}>
          <div className="card-header">Card {index + 1}</div>
          <div className="card-body">
            <h5 className="card-title">{card.front}</h5>
            <h6 className="card-text">{card.back}</h6>
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-right">
                  <Link to={`/decks/${deckId}/cards/${card.id}/edit`}>
                    <button type="button" className="btn btn-secondary">
                      <i className="bi bi-pencil-fill"></i>Edit
                    </button>
                  </Link>
                  <button
                    type="button"
                    className="btn btn-delete btn-danger"
                    onClick={() => handleDelete(card.id)}
                  >
                    <i className="bi bi-trash3"></i>Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
  );

  return (
    <>
    <h2>Cards</h2>
    {cardList}
    </>
  )
}

export default DeckCardList;