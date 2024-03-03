import { useState, useEffect } from "react";
import * as YGO from "./card_helper";
import Cards from './cards/cards'
import Scores from "./scores";
import '../style/App.css'

export default function App() {
  const [cards, setCards] = useState([])

  useEffect(() => {
    const YGOcards = YGO.getAll().map(card => card = {
      name: card,
      selected: false,
      image: <img src={`https://static-7.studiobebop.net/ygo_data/card_images/${card}.jpg`} />
    })

    setCards(YGOcards)

    return (() => {
      setCards([])
    })
  }, [])

  const handleSelectedCard = (card) => {
    setCards(card.selected ? YGO.reset(cards) : YGO.modify(cards, card))
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

      <div id="footer">
        <p>
          Card images and details were fetched from &nbsp;

          <a href="http://yugiohprices.com" target="_blank" >
            yugiohprices.com
          </ a>
        </p>
      </div>
    </div>
  )
}
