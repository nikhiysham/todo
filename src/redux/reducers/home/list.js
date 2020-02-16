import Actions from 'actions';

const DEFAULT_STATE = {
  isLoading: false,
  data: [],
  error: null,
  isRefreshing: false
};

function list(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case Actions.FETCH_USER_LIST:
      return {
        ...state,
        isLoading: true,
        isRefreshing: action.isRefreshing,
      };

    case Actions.FETCH_USER_LIST_SUCCESS:
      return {
        ...state,
        error: null,
        data: action.data,
        isLoading: false,
        isRefreshing: false
      };

    case Actions.FETCH_USER_LIST_FAIL:
      return {
        ...state,
        isLoading: false,
        error: action.error,
        isRefreshing: false,
      };

    default:
      return state;
  }
}

export default list;
