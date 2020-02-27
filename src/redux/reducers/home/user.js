import Actions from 'actions';

const DEFAULT_STATE = {
  isLoading: false,
  data: [],
  error: null,
  isRefreshing: false
};

function user(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Actions.SET_USER:
      return {
        ...state,
        data: action.data,
      };

    case Actions.UPDATE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case Actions.UPDATE_USER_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.data
      };

    case Actions.UPDATE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    case Actions.DELETE_USER:
      return {
        ...state,
        isLoading: true,
      };

    case Actions.DELETE_USER_SUCCESS:
      return {
        ...state,
        error: null
      };

    case Actions.DELETE_USER_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error
      };

    default:
      return state;
  }
}

export default user;
