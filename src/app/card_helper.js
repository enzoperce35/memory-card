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
  'Amazoness_Queen',
  'Blue_Eyes_White_Dragon',
  'Goka,_the_Pyre_of_Malice',
  'Sergeant_Electro',
  'Mythical_Beast_Cerberus',
  'Vampire_Retainer',
  'Jerry_Beans_Man',
  'Pumprincess_the_Princess_of_Ghosts',
  'Grandmaster_of_the_Six_Samurai',
  'King_of_the_Swamp',
  'Yubel',
  'The_Unhappy_Girl',
  'Victory_Viper_XX03',
  'Gozuki',
  'Yomi_Ship',
  'A_Man_with_Wdjat',
  'Legion_the_Fiend_Jester',
  'Horus_the_Black_Flame_Dragon_LV6',
  'Exodia_the_Forbidden_One',
  'Gemini_Elf',
  'Vampire_Grace',
]

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

function reset(cards) {
  const mod = cards.map((card) => {
    return {...card, selected: false}
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
  reset,
  shuffle,
}
