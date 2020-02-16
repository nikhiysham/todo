export const NAME = 'AUTH';

export const SIGN_OUT = `${NAME}/SIGN_OUT`;
export const SIGN_OUT_SUCCESS = `${NAME}/SIGN_OUT_SUCCESS`;
export const SIGN_OUT_FAIL = `${NAME}/SIGN_OUT_FAIL`;

export const signOut = (data = {}) => ({
  type: SIGN_OUT,
  ...data,
});

export const signOutSuccess = data => ({
  type: SIGN_OUT_SUCCESS,
  data,
});

export const signOutFail = error => ({
  type: SIGN_OUT_FAIL,
  error,
});

