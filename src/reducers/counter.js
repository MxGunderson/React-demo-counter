const initialState = {
  count: 0,
  clicks: 0,
  searchInputted: 0
};


function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
        clicks: state.clicks + 1
      };
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
        clicks: state.clicks + 1
      };
    case 'NEW_NUMBER':
      return {
        ...state,
        searchInputted: action.number
      };

    case 'CHANGE_NUMBER':
      return {
        ...state,
        count: (state.count = parseInt(state.searchInputted)),
        clicks: (state.clicks = 0)
      };

    default:
      return state;
  }
}

export default counterReducer;