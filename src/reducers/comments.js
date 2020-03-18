export default function(state = [], action = {}) {
  switch (action.type) {
    case "ADD_COMMENT":
      const updatedState = [...state, action.payload];
      return updatedState;
    case "GET_ALL_COMMENTS":
      return action.payload;
    default:
      return state;
  }
}
