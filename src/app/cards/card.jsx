import { useState, useEffect } from "react"

export default function Card({card, select}) {
  const [cardImage, setCardImage] = useState(null)

  useEffect(() => {
    setCardImage(`https://static-7.studiobebop.net/ygo_data/card_images/${card.name}.jpg`)

    return (() => {
      setCardImage(null)
    })
  }, [card])


  return (
    <div>
      <span onClick={() => { select(card) }}>
        <img src={cardImage} />
      </span>

      <p className="card-name">
        {card.name.replaceAll('_', ' ')}
      </p>
    </div>
  )
}
