import { useState } from "react";
import * as YGO from "./card_helper";
import Scores from "./scores";
import Cards from './cards/cards'
import '../App.css'

export default function App() {
  const [cards, setCards] = useState(YGO.getAll())

  const handleSelectedCard = (card) => {
    setCards(card.selected ? YGO.getAll() : YGO.modify(cards, card))
  }

  return (
    <div id="container">
      <div id="header">
        <Scores cards={cards}/>
      </div>

      <div id="body">
        <Cards cards={cards} select={handleSelectedCard}/>
      </div>
    </div>
  )
}
