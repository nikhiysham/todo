export const NAME = 'PERSIST';

export const SET_TOKEN = `${NAME}/SET_TOKEN`;

export const getToken = store => store[NAME].token.accessToken;

export const setToken = data => ({
  type: SET_TOKEN,
  data,
});
