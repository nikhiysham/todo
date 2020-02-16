import {
  takeLatest, all, fork, call, put, select
} from 'redux-saga/effects';
import Actions from 'actions';
import _ from 'lodash';
import * as api from 'src/lib/api';
import { alert } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

function* signIn(action) {
  try {
    const { email, password } = action;

    if (_.isEmpty(email)) {
      yield call(alert, 'Error', "Email can't be blank", 'OK');
      yield put(Actions.signInFail({}));
      return;
    }
    if (_.isEmpty(password)) {
      yield call(alert, 'Error', "Password can't be blank", 'OK');
      yield put(Actions.signInFail({}));
      return;
    }

    const response = yield call(api.signIn, { email, password });
    const json = response && response.data;

    yield put(Actions.signInSuccess(json.data));
    yield put(Actions.setToken({ accessToken: json.data.token }));
    yield put(Actions.setProfile(json.data));

    yield call(alert, 'Success', 'Sign in success', 'OK');

    NavigationService.navigate('TabBar');
  } catch (response) {
    const error = _.get(response, 'data.error');
    if (typeof error === 'object' && error instanceof Object) {
      const joinedMessages = _.flatten(Object.values(error));

      yield call(alert, 'Error', joinedMessages.join('\n'), 'OK');
    } else if (typeof error === 'string') {
      yield call(alert, 'Error', error, 'OK');
    } else {
      yield call(alert, 'Error', 'The email or password you entered is incorrect', 'OK');
    }

    yield put(Actions.signInFail(response));
  }
}

function* watch() {
  yield takeLatest(Actions.SIGN_IN, signIn);
}

export default function* saga() {
  yield all([
    fork(watch),
  ]);
}
