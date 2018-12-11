import { all } from 'redux-saga/effects'
import postsWatcher from './posts'

export default function * rootSaga () {
  yield all([
    postsWatcher()
  ])
}
