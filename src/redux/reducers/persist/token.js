import Actions from 'actions';

const DEFAULT_STATE = {};
function token(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Actions.SET_TOKEN:
      return action.data;

    default:
      return state;
  }
}

export default token;
