let decks = {
  "PSV": {
    name: 'PSV',
    cards: {
      "am8ehyc8byjqgar0jgpub9": {
        id: 'am8ehyc8byjqgar0jgpub9',
        question: 'Where is the stadium of the football club PSV?',
        answer: 'Eindhoven, the Netherlands',
      },
    },
  },
  "The Netherlands": {
    name: 'The Netherlands',
    cards: {
      "xj352vofupe1dqz9emx13r": {
        id: 'xj352vofupe1dqz9emx13r',
        question: 'How many times does the Netherlands fit into Canada',
        answer: '100',
      },
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        question: "What is the Netherlands' national color?",
        answer: 'Orange'
      },
    },
  },
  "Canada": {
    name: 'Canada',
    cards: {
      "vthrdm985a262al8qx3do": {
        id: 'vthrdm985a262al8qx3do',
        question: 'Is Canada the largest country in the world?',
        answer: "No it's Russia",
      },
      "6ni6ok3ym7mf1p33lnez": {
        id: '6ni6ok3ym7mf1p33lnez',
        question: 'How many provinces does Canada have?',
        answer: '13',
      },
    },
  },
  "History": {
    name: 'History',
    cards: {},
  },
  "Geography": {
    name: 'Geography',
    cards: {},
  },
}

export function _getDecks() {
  return {...decks}
}
