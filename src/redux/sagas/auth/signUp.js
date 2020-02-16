import {
  takeLatest, all, fork, call, put,
} from 'redux-saga/effects';
import Actions from 'actions';
import _ from 'lodash';
import * as api from 'src/lib/api';
import { alert } from 'src/lib/alert';
import NavigationService from 'src/components/navigator/NavigationService';

function* signUp(action) {
  try {
    const {
      name, email, password
    } = action;

    if (
      _.isEmpty(name)
      || _.isEmpty(email)
      || _.isEmpty(password)
    ) {
      yield call(alert, 'Error', 'Please fill in all details', 'OK');
      yield put(Actions.signUpFail({}));
      return;
    }

    const response = yield call(api.signUp, {
      name, email, password
    });

    // in case returns 200 when error
    const isRequestSuccess = _.get(response, 'data.success');
    if (!isRequestSuccess) {
      throw response;
    }

    const json = response && response.data;
    yield put(Actions.signUpSuccess(json));

    if (json.message) {
      yield call(
        alert,
        'Success',
        json.message,
        'OK',
        () => {
          NavigationService.navigate('SignIn');
        }
      );
    }
  } catch (response) {
    const error = _.get(response, 'data.error');
    if (typeof error === 'object' && error instanceof Object) {
      const joinedMessages = _.flatten(Object.values(error));

      yield call(alert, 'Error', joinedMessages.join('\n'), 'OK');
    } else if (typeof error === 'string') {
      yield call(alert, 'Error', error, 'OK');
    } else {
      yield call(alert, 'Oopss', 'Something went wrong.', 'OK');
    }

    yield put(Actions.signUpFail(response));
  }
}

function* watch() {
  yield takeLatest(Actions.SIGN_UP, signUp);
}

export default function* saga() {
  yield all([
    fork(watch),
  ]);
}
