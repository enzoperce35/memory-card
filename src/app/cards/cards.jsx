import { shuffle } from '../card_helper';
import Card from './card';

export default function Cards({cards, select}) {

  const charList = shuffle(cards).map((card) =>
    <li className='cards' key={card.name} onClick={() => select(card)}>
      <Card card={card} />
    </li>
  )

  return (
    <ul id='cards'>
      {charList}
    </ul>
  )
}
