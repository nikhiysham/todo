export const NAME = 'PERSIST';

export const SET_PROFILE = `${NAME}/SET_PROFILE`;

export const getProfile = store => store[NAME].user.data;

export const setProfile = data => ({
  type: SET_PROFILE,
  data,
});

