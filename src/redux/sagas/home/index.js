import { all, fork } from 'redux-saga/effects';
import list from './list';

export default function* home() {
  yield all([
    fork(list)
  ]);
}
