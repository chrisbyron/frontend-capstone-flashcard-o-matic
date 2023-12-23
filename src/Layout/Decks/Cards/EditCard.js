import React, { useEffect, useState } from "react";
import { readCard, readDeck, updateCard } from "../../../utils/api";
import Edit from "../Edit";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Breadcrumb from "../../Breadcrumb";
import CardForm from "./CardForm";

function EditCard({ deck, setDeck }) {
  const history = useHistory();
  let { deckId, cardId } = useParams();
  const initialFormData = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const abortController = new AbortController();
    async function getCard() {
      const response = await readCard(cardId);
      setFormData(response);
    }
    getCard();
    return () => abortController.abort();
  }, [cardId]);

  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    return () => abortController.abort();
  }, [deckId, deck]);

  async function handleSubmit(event) {
    event.preventDefault();
    await updateCard(formData);
    history.push(`/decks/${deckId}`);
  }

  return (
    <>
      <Breadcrumb deck={deck} action={"Edit Card"}/>
      <h2>Edit Card</h2>
      <CardForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} deckId={deckId} write={"Save"}/>
    </>
  );
}

export default EditCard;
