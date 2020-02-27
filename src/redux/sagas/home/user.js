import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';
import Actions from 'actions';
import _ from 'lodash';
import * as api from 'src/lib/api';
import { alert } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

export function* updateUser(action) {
  try {
    const response = yield call(api.updateUser, { ...action.data });
    const json = response && response.data;

    // in case returns 200 when error
    const isRequestSuccess = _.get(response, 'data.success');
    if (!isRequestSuccess) {
      throw response;
    }

    yield put(Actions.updateUserSuccess(json));
    yield put(Actions.fetchUserList({ name: '' }));

    yield call(
      alert,
      'Success',
      'User has been successfully updated',
      'OK',
      () => {
        NavigationService.navigate('Home');
      }
    );

  } catch (response) {
    const error = _.get(response, 'data.message');
    if (_.some(error, _.isObject)) {
      const joinedMessages = error.map(item => item.msg);

      yield call(alert, 'Error', joinedMessages.join('\n'), 'OK');
    } else if (typeof error === 'string') {
      yield call(alert, 'Error', error, 'OK');
    } else {
      yield call(alert, 'Oopss', 'Something went wrong.', 'OK');
    }

    yield put(Actions.updateUserFailed(response));
  }
}

export function* deleteUser(action) {
  try {
    const response = yield call(api.deleteUser, { ...action.data });
    const json = response && response.data;

    // in case returns 200 when error
    const isRequestSuccess = _.get(response, 'data.success');
    if (!isRequestSuccess) {
      throw response;
    }

    yield put(Actions.deleteUserSuccess(json));
    yield put(Actions.fetchUserList({ name: '' }));

    yield call(
      alert,
      'Success',
      'User has been successfully deleted',
      'OK'
    );
  } catch (response) {
    const error = _.get(response, 'data.message');
    if (_.some(error, _.isObject)) {
      const joinedMessages = error.map(item => item.msg);

      yield call(alert, 'Error', joinedMessages.join('\n'), 'OK');
    } else if (typeof error === 'string') {
      yield call(alert, 'Error', error, 'OK');
    } else {
      yield call(alert, 'Oopss', 'Something went wrong.', 'OK');
    }

    yield put(Actions.deleteUserFailed(response));
  }
}

function* watch() {
  yield takeLatest(Actions.UPDATE_USER, updateUser);
  yield takeLatest(Actions.DELETE_USER, deleteUser);
}

export default function* saga() {
  yield all([
    fork(watch),
  ]);
}
