import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function HomeCard({deck, index, handleDelete}) {
    return (
        <div className="deck" key={index}>
                    <h3>{deck.name}</h3>
                    <em>{deck.cards.length} cards</em>
                    <p>{deck.description}</p>
                    <Link to={`/decks/${deck.id}`}>
                        <button type="button" className="btn btn-sm btn-secondary"><i className="bi-alarm"></i>View</button>
                    </Link>
                    <Link to={`/decks/${deck.id}/study`}>
                        <button type="button" className="btn btn-sm btn-primary" >Study</button>
                    </Link>
                    <button type="button"className="btn btn-sm btn-danger" onClick={() => handleDelete(deck.id)}>Delete</button>
                </div>
    )
}

export default HomeCard;