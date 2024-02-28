import { shuffle } from "../card_helper";
import Card from "./card";

export default function Cards({cards, select}) {

  const charList = shuffle(cards).map(card =>
    <li className="cards" key={card.name}>
      <Card card={card} select={select} />
    </li>
  )

  return (
    <ul id="cards">
      {charList}
    </ul>
  )
}
