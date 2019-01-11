
import { generateID } from '../utils/helpers'
import { _getDecks } from '../utils/_DATA.js'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const ADD_DECK = 'ADD_DECK'

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
