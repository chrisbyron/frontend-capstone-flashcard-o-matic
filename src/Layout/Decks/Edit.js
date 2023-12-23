import React, { useEffect, useState } from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { readDeck, updateDeck } from "../../utils/api";
import Breadcrumb from "../Breadcrumb";
import DeckForm from "./DeckForm";

function Edit() {
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormData = {
    name: "",
    description: "",
    id: null,
  };
  const [formData, setFormData] = useState(initialFormData);

  useEffect(() => {
    const abortController = new AbortController();
    async function getDeck() {
      const response = await readDeck(deckId);
      setFormData(response);
    }
    getDeck();
    return () => abortController.abort();
  }, [deckId]);

  async function handleSubmit(event) {
    event.preventDefault();
    const updatedDeck = await updateDeck(formData);
    history.push(`/decks/${updatedDeck.id}`);
  }
  
  return (
    <>
      <Breadcrumb deck={formData} action={"Edit Deck"}/>
      <h2>Edit Deck</h2>
      <DeckForm handleSubmit={handleSubmit} formData={formData} setFormData={setFormData}/>
    </>
  );
}

export default Edit;
