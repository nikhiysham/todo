import * as signIn from './signIn';
import * as signUp from './signUp';
import * as signOut from './signOut';

export default {
  ...signIn,
  ...signUp,
  ...signOut
};
