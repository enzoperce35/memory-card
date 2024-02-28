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
    <a onClick={(e) => {
      e.preventDefault()
      select(card)
    }}>
      <img src={cardImage} />
    </a>
  )
}
