import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_POSTS, POSTS_RECEIVED } from '../actions/types'
import { fetchPosts } from '../api'

function * getPostsData (action) {
  const posts = yield call(fetchPosts)
  yield put({ type: POSTS_RECEIVED, posts })
}

export default function * actionWatcher () {
  yield takeLatest(GET_POSTS, getPostsData)
}
