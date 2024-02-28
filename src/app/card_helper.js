const YuGiOhCards = [
  'Dark_Magician',
  'Sphere_Kuriboh',
  'Kuriboh',
  'Phantom_Beast_Rock_Lizard',
  'Dark_Magician_Girl',
  'Lava_Golem',
  'Parasite_Paracide',
  'Cobra_Jar',
  'Wrecker_Panda',
].map(card => card = {name: card, selected: false} )

function shuffle(cards) {
  for(let i = cards.length-1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i+1));

    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp
  }

  return cards
}

function modify(cards, selected) {
  const mod = cards.map((card) => {
    if (card.name === selected.name) {
      return {...card, selected: true}
    }

    return card
  })

  return mod
}

function getSelected(cards) {
  let selectedCards = [];

  for (let i=0; i<cards.length; i++) {
    let card = cards[i];

    if (card.selected) selectedCards.push(card);
  }

  return selectedCards
}

function getAll() {
  return YuGiOhCards;
}

export {
  getAll,
  getSelected,
  modify,
  shuffle,
}
