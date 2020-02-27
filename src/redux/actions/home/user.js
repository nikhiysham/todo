export const NAME = 'HOME';

export const SET_USER = `${NAME}/SET_USER`;
export const UPDATE_USER = `${NAME}/UPDATE_USER`;
export const UPDATE_USER_SUCCESS = `${NAME}/UPDATE_USER_SUCCESS`;
export const UPDATE_USER_FAILED = `${NAME}/UPDATE_USER_FAILED`;
export const DELETE_USER = `${NAME}/DELETE_USER`;
export const DELETE_USER_SUCCESS = `${NAME}/DELETE_USER_SUCCESS`;
export const DELETE_USER_FAILED = `${NAME}/DELETE_USER_FAILED`;

export const getUser = store => store[NAME].user.data;

export const setUser = data => ({
  type: SET_USER,
  data,
});

export const updateUser = data => ({
  type: UPDATE_USER,
  data
});

export const updateUserSuccess = data => ({
  type: UPDATE_USER_SUCCESS,
  data
});

export const updateUserFailed = error => ({
  type: UPDATE_USER_FAILED,
  error,
});

export const deleteUser = data => ({
  type: DELETE_USER,
  data,
});

export const deleteUserSuccess = data => ({
  type: DELETE_USER_SUCCESS,
  data
});

export const deleteUserFailed = error => ({
  type: DELETE_USER_FAILED,
  error,
});

