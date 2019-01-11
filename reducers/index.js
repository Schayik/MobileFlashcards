
import { RECEIVE_DECKS, ADD_DECK, ADD_CARD } from '../actions'

function decks(state = {}, action) {
  const { type, decks, deck, deckName, card } = action
  switch(type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [deck.name]: deck,
      }
    case ADD_CARD:
      return {
        ...state,
        [deckName]: {
          ...state[deckName],
          cards: {
            ...state[deckName].cards,
            [card.id]: card,
          },
        },
      }
    default:
      return state
  }
}

export default decks
