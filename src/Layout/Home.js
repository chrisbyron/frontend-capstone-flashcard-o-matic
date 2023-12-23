import React, {useEffect} from "react";
import { deleteDeck, listDecks } from "../utils/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import HomeCard from "./HomeCard";

function Home({deckList, setDeckList, handleDelete}) {
    useEffect(() => {
        const abortController = new AbortController();
        async function getDecks() {
            const response = await listDecks(abortController.signal);
            setDeckList(response);
        }
        getDecks();
        return () => abortController.abort()
    }, [deckList]);

    return (
        <>
            <Link to="/decks/new">
                <button type="button" className="btn btn-lg btn-secondary">+ Create Deck</button>
            </Link>
            <h2>Decks</h2>            
            {deckList.map((deck, index) => {
                return (
                    <HomeCard deck={deck} index={index} handleDelete={handleDelete}/>
                )
            })}
            
        </>
    );
}

export default Home;