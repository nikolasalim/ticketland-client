export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_EVENTS":
      return action.payload;
    case "ADD_EVENT":
      const updatedState = { ...state, list: [...state.list, action.payload] };
      return updatedState;
    default:
      return state;
  }
}
