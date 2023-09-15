import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { readDeck } from "../../utils/api/index";

import StudyBreadcrumbNavBar from "./StudyBreadcrumbNavBar";
import StudyCard from "./StudyCard";

function Study() {
    const [deck, setDeck] = useState({});
    const [cards, setCards] = useState([]);
    const [currentCard, setCurrentCard] = useState({});
    const deckId = useParams().deckId;

    useEffect(() => {
        async function loadDeck() {
            const fromReadDeck = await readDeck(deckId);
            setDeck(fromReadDeck);
            setCards(fromReadDeck.cards);
            setCurrentCard(fromReadDeck.cards[0]);
        }
        loadDeck();
    }, [deckId]);
  
    return (
      <div>
        <StudyBreadcrumbNavBar deckId={deckId} deck={deck}/>
        <h2 className="mb-4">Study: {deck.name}</h2>
        <StudyCard cards={cards} currentCard={currentCard} setCurrentCard={setCurrentCard} deckId={deckId}/>
      </div>
    );
  }
  
  export default Study;