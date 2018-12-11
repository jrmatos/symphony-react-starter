import { POSTS_RECEIVED } from '../actions/types'

const INITIAL_STATE = []

export default function postsReducer (state = INITIAL_STATE, action) {
  switch (action.type) {
    case POSTS_RECEIVED:
      return [...state, ...action.posts]
    default:
      return state
  }
}
