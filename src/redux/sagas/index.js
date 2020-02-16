import { all, fork } from 'redux-saga/effects';
import auth from './auth';
import home from './home';

export default function* root() {
  yield all([
    fork(auth),
    fork(home)
  ]);
}
