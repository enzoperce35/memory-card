import { useState } from "react";
import * as YGO from "./card_helper";
import Scores from "./scores";
import Cards from './cards/cards'
import '../style/App.css'

export default function App() {
  const [cards, setCards] = useState(YGO.getAll())

  const handleSelectedCard = (card) => {
    setCards(card.selected ? YGO.getAll() : YGO.modify(cards, card))
  }

  return (
    <div id="container">
      <div id="header">
        <div>
          <h3 id="head-name">
            <em>Yu-Gi-Oh!</em>
            Memory Game
          </h3>

          <Scores cards={cards}/>
        </div>

      </div>

      <div id="content">
        <Cards cards={cards} select={handleSelectedCard}/>
      </div>
    </div>
  )
}
