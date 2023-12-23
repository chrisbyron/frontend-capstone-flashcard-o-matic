import React, { useState } from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import CreateDeck from "./Decks/CreateDeck";
import Deck from "./Decks/Deck";
import Edit from "./Decks/Edit";
import Home from "./Home";
import Study from "./Decks/Study";
import { deleteDeck } from "../utils/api";
import AddCard from "./Decks/Cards/AddCard";
import EditCard from "./Decks/Cards/EditCard";

function Layout() {
  const [card, setCard] = useState({});
  const [deck, setDeck] = useState({});
  const [deckList, setDeckList] = useState([]);

  const handleDelete = (deckId) => {
    if (window.confirm("Delete this deck?\n\nYou will not be able to recover it.")) {
        deleteDeck(deckId);
    }
}

  return (
    <div>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Switch>
          <Route exact path="/">
            <Home deckList={deckList} setDeckList={setDeckList} handleDelete={handleDelete}/>
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck handleDelete={handleDelete}/>
          </Route>
          <Route exact path="/decks/:deckId/study">
            <Study deck={deck} setDeck={setDeck} />
          </Route>
          <Route exact path="/decks/:deckId/edit">
            <Edit />
          </Route>
          <Route exact path="/decks/:deckId/cards/new">
            <AddCard deck={deck} setDeck={setDeck}/>
          </Route>
          <Route exact path="/decks/:deckId/cards/:cardId/edit">
            <EditCard deck={deck} setDeck={setDeck}/>
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Layout;
