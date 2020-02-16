export const NAME = 'HOME';

export const FETCH_USER_LIST = `${NAME}/FETCH_USER_LIST`;
export const FETCH_USER_LIST_SUCCESS = `${NAME}/FETCH_USER_LIST_SUCCESS`;
export const FETCH_USER_LIST_FAIL = `${NAME}/FETCH_USER_LIST_FAIL`;

export const getUserList = store => store[NAME].list.data;

export const fetchUserList = (data = {}) => ({
  type: FETCH_USER_LIST,
  ...data,
});

export const fetchUserListSuccess = (data, options = {}) => ({
  type: FETCH_USER_LIST_SUCCESS,
  data,
  options,
});

export const fetchUserListFail = error => ({
  type: FETCH_USER_LIST_FAIL,
  error,
});

