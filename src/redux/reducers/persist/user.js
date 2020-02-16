import Actions from 'actions';

const DEFAULT_STATE = {
  isLoading: false,
  data: {},
  error: null
};
function user(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Actions.SET_PROFILE: {
      return {
        ...state,
        data: action.data
      };

    }

    default:
      return state;
  }
}

export default user;
