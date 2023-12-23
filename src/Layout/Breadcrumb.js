import React from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Breadcrumb({deck, action}) {

    const activeCrumb = action ? <li className="breadcrumb-item active" aria-current="page">{action}</li> : <></>;
    const deckCrumb = deck ? <li className="breadcrumb-item"><Link to={`/decks/${deck.id}`}>{deck.name}</Link></li> : <></>;

    return (
        <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">
              <i className="bi bi-house-up-fill"> </i>Home
            </Link>
          </li>
          {deckCrumb}
          {activeCrumb}
        </ol>
      </nav>
    )
}

export default Breadcrumb;