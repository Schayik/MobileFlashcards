
import { RECEIVE_DECKS, ADD_DECK } from '../actions'

function decks(state = {}, action) {
  const { type, decks, id, name } = action
  switch(type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        decks,
      }
    case ADD_DECK:
      return {
        ...state,
        [id]: {
          id,
          name,
        }
      }
    default:
      return state
  }
}

export default decks
