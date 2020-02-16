export const NAME = 'AUTH';

export const SIGN_IN = `${NAME}/SIGN_IN`;
export const SIGN_IN_SUCCESS = `${NAME}/SIGN_IN_SUCCESS`;
export const SIGN_IN_FAIL = `${NAME}/SIGN_IN_FAIL`;

export const signIn = (data = {}, callback) => ({
  type: SIGN_IN,
  ...data,
  callback
});

export const signInSuccess = data => ({
  type: SIGN_IN_SUCCESS,
  data,
});

export const signInFail = error => ({
  type: SIGN_IN_FAIL,
  error,
});
