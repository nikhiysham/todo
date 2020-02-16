import auth from './auth';
import home from './home';
import persist from './persist';

export default {
  ...auth,
  ...home,
  ...persist
};
