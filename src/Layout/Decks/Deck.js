import React, { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import DeckControls from "./DeckControls";
import DeckCardList from "./DeckCardList";
import Breadcrumb from "../Breadcrumb";

function Deck({handleDelete}) {
  const { deckId } = useParams();
  const history = useHistory();
  const [deck, setDeck] = useState();

  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    return () => abortController.abort();
  }, [deckId, deck]);

  if (deck) {
    return (
      <>
        <Breadcrumb action={deck.name}/>
        <DeckControls deck={deck} handleDelete={handleDelete}/>
        <DeckCardList cards={deck.cards}/>
      </>
    );
  } else {
    return <h2>Loading deck....</h2>;
  }
}

export default Deck;
