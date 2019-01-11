
import { generateID } from '../utils/helpers'
import { _getDecks } from '../utils/_DATA.js'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'
export const ADD_CARD = 'ADD_CARD'

export function receiveDecks() {
  return {
    type: RECEIVE_DECKS,
    decks: _getDecks()
  }
}

function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck,
  }
}

export function handleAddDeck(name) {
  return addDeck({
    name,
    cards: {},
  })
}

function addCard(deckName, card) {
  return {
    type: ADD_CARD,
    deckName,
    card,
  }
}

export function handleAddCard(deckName, statement, answer) {
  return addCard(deckName, {
    id: generateID(),
    question: statement,
    answer,
  })
}
