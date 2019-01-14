let decks = {
  "TestDeck1": {
    name: 'TestDeck1',
    cards: {
      "8xf0y6ziyjabvozdd253nd": {
        id: '7ni6ok3ym7mf1p33lnez',
        question: 'PSV won the dutch football league last season (17/18)',
        answer: true
      },
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        question: 'Blue is a color',
        answer: true
      },
      "loxhs1bqm25b708cmbf3g": {
        id: 'loxhs1bqm25b708cmbf3g',
        question: 'Canada is the largest country in the world',
        answer: false
      },
    },
  },
  "TestDeck2": {
    name: 'TestDeck2',
    cards: {
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        question: 'Red is a color',
        answer: true
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        question: 'Orange is a color',
        answer: true
      },
    },
  },
  "TestDeck3": {
    name: 'TestDeck3',
    cards: {
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        question: 'Bike is a color',
        answer: false,
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        question: 'PSV is the best',
        answer: true,
      },
    },
  },
  "TestDeck4": {
    name: 'TestDeck4',
    cards: {},
  },
  "TestDeck5": {
    name: 'TestDeck5',
    cards: {},
  },
}

export function _getDecks() {
  return {...decks}
}
