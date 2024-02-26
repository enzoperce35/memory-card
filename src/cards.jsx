import { useState } from "react";
import yuGiOhCards from "./YGOCards";
import Card from "./card";

const YuGiOhCards = [
  'Dark_Magician',
  'Sphere_Kuriboh',
  'Phantom_Beast_Rock_Lizard',
  'Dark_Magician_Girl',
  'Lava_Golem',
  'Parasite_Paracide',
  'Cobra_Jar',
  'Wrecker_Panda',
].map(card => card = {name: card, selected: false} )

function shuffle(arr) {
  for(let i = arr.length-1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));

    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp
  }

  return arr
}

export default function Cards({restart, addScore}) {
  const [cards, setCards] = useState(YuGiOhCards)

  const handleSelectedCard = (selectedCard) => {
    const modifiedCards = cards.map((card) => {
      if (card.name === selectedCard.name) {
        return {...card, selected: true}
      }

      return card
    })

    setCards(modifiedCards)
  }

  const select = (card) => {
    if (!card.selected) {
      handleSelectedCard(card)

      addScore()
    } else {
      setCards(YuGiOhCards)

      restart()
    }
  }

  const charList = shuffle(cards).map(card =>
    <li key={card.name}>
      <Card card={card} select={select}/>
    </li>
  )

  return (
    <div>
      <ul>
        {charList}
      </ul>
    </div>
  )
}
