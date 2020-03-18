export default function(state = [], action = {}) {
  switch (action.type) {
    case "ADD_COMMENT":
      const updatedState = [...state, action.payload];
      return updatedState;
    default:
      return state;
  }
}
