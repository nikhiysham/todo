import api from './setup';

// auth
export const signIn = params => api.post('login', params);
export const signUp = params => api.post('register', params);
export const signOut = params => api.get('logout', params);

//home
export const fetchUserList = params => api.get('list', params);