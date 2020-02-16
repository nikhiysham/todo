export const NAME = 'AUTH';

export const SIGN_UP = `${NAME}/SIGN_UP`;
export const SIGN_UP_SUCCESS = `${NAME}/SIGN_UP_SUCCESS`;
export const SIGN_UP_FAIL = `${NAME}/SIGN_UP_FAIL`;

export const signUp = (data = {}) => ({
  type: SIGN_UP,
  ...data,
});

export const signUpSuccess = data => ({
  type: SIGN_UP_SUCCESS,
  data,
});

export const signUpFail = error => ({
  type: SIGN_UP_FAIL,
  error,
});
