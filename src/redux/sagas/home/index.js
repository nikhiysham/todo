import { all, fork } from 'redux-saga/effects';
import list from './list';
import user from './user';

export default function* home() {
  yield all([
    fork(list),
    fork(user)
  ]);
}
