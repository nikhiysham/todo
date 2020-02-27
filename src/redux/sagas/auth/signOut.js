import {
  takeLatest, all, fork, call, put, select
} from 'redux-saga/effects';
import Actions from 'actions';
import { alert } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

function* signOut() {
  try {
    yield put(Actions.setToken({ accessToken: null }));
    yield put(Actions.signOutSuccess());
    NavigationService.navigate('SignIn');

    yield call(alert, 'Success', 'Sign out with successfully', 'OK');

  } catch (response) {
    yield put(Actions.signOutFail(response));
  }
}

function* watch() {
  yield takeLatest(Actions.SIGN_OUT, signOut);
}

export default function* saga() {
  yield all([
    fork(watch),
  ]);
}
