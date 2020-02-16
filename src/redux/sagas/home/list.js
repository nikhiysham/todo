import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';
import Actions from 'actions';
import _ from 'lodash';
import * as api from 'src/lib/api';
import { alert } from 'src/lib/alert';

export function* fetchUserList(action) {
  try {
    const response = yield call(api.fetchUserList, { name: action.name });
    const json = response && response.data;

    yield put(Actions.fetchUserListSuccess(json));
  } catch (response) {
    yield put(Actions.fetchUserListFail(response));
  }
}

function* watch() {
  yield takeLatest(Actions.FETCH_USER_LIST, fetchUserList);
}

export default function* saga() {
  yield all([
    fork(watch),
  ]);
}
