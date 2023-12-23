import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { createCard } from "../../../utils/api";
import { readDeck } from "../../../utils/api";
import Breadcrumb from "../../Breadcrumb";
import CardForm from "./CardForm";

function AddCard({ deck, setDeck }) {
  const { deckId } = useParams();
  const initialFormData = {
    front: "",
    back: "",
  };
  const [formData, setFormData] = useState(initialFormData);

  async function handleSubmit(event) {
    event.preventDefault();
    await createCard(deckId, formData);
    setFormData(initialFormData);
  }

  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      const response = await readDeck(deckId);
      setDeck(response);
    }
    getDeck();
    return () => abortController.abort();
  }, [deckId, deck]);

  return (
    <>
      <Breadcrumb deck={deck} action={"Add Card"}/>
      <h2>{`${deck.name}: Add Card`}</h2>
      <CardForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData} deckId={deckId} write={"Submit"}/>
    </>
  );
}

export default AddCard;
