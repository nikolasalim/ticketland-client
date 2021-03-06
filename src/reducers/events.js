export default function(state = { list: [], total: null }, action = {}) {
  switch (action.type) {
    case "GET_ALL_EVENTS":
      return action.payload;
    case "ADD_EVENT":
      const updatedState = { ...state, list: [action.payload, ...state.list] };
      return updatedState;
    default:
      return state;
  }
}
