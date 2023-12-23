import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { readDeck } from "../../utils/api";
import StudyCard from "./Cards/StudyCard";
import Breadcrumb from "../Breadcrumb";

// {
//     "id": 1,
//     "front": "Differentiate between Real DOM and Virtual DOM.",
//     "back": "Virtual DOM updates are faster but do not directly update the HTML",
//     "deckId": 1
//   },
function Study({ deck, setDeck }) {
  const { deckId } = useParams();
  const [studyGroup, setStudyGroup] = useState({
    side: "front",
    cardIndex: 0,
    cards: [],
  });
  const history = useHistory();

  useEffect(() => {
    async function getCards() {
      const response = await readDeck(deckId);
      try {
        setDeck(response);
      } catch (e) {
        console.log(e);
      }

      setStudyGroup({
        ...studyGroup,
        side: "front",
        cardIndex: 0,
        cards: response.cards,
      });
    }
    getCards();
  }, [deckId, setDeck]);

  const handleFlip = () => {
    if (studyGroup.side === "front") {
      setStudyGroup({ ...studyGroup, side: "back" });
    } else {
      setStudyGroup({ ...studyGroup, side: "front" });
    }
  };

  const handleNext = () => {
    // Also handle the last card in the deck appropriately
    if (
      studyGroup.cards != undefined &&
      studyGroup.cardIndex >= studyGroup.cards.length - 1
    ) {
      if (
        window.confirm(
          'You\'ve reached the end of this deck. Click "OK" to restart, or "Cancel" to return home."'
        )
      ) {
        setStudyGroup({ ...studyGroup, cardIndex: 0, side: "front" });
      } else {
        history.push("/");
        setDeck({});
      }
    } else {
      setStudyGroup({
        ...studyGroup,
        cardIndex: studyGroup.cardIndex + 1,
        side: "front",
      });
    }
  };

  let card =
    deck.cards && deck.cards.length >= 3 ? (
      <StudyCard
        card={deck.cards[studyGroup.cardIndex]}
        index={studyGroup.cardIndex}
        total={studyGroup.cards.length}
        side={studyGroup.side}
        handleFlip={handleFlip}
        handleNext={handleNext}
      />
    ) : (
      <>
        <p>Not enough cards</p>
        <p>
          You need at least 3 cards to study. There this deck contains{" "}
          {studyGroup.cards.length} card(s).
        </p>
        <Link to={`/decks/${deckId}/cards/new`}>
          <button type="button" className="btn btn-primary btn-small">
            +Add Cards
          </button>
        </Link>
      </>
    );

  return (
    <>
      <Breadcrumb deck={deck} action={"Study"}/>
      <h1>Study: {deck.name}</h1>
      {card}
    </>
  );
}

export default Study;
