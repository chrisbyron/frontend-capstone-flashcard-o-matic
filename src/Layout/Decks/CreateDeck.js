import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import DeckForm from "./DeckForm";

function CreateDeck() {
  const history = useHistory();

  const initialFormData = {
    name: "",
    description: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [deckId, setDeckId] = useState();

  async function handleSubmit(event) {
    event.preventDefault();
    const newDeck = await createDeck(formData);
    history.push(`/decks/${newDeck.id}`);
  }

  return (
    <>
      <Breadcrumb action={"Create Deck"}/>
      <h2>Create Deck</h2>
      <DeckForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
    </>
  );
}

export default CreateDeck;
