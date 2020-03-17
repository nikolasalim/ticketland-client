export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_ALL_TICKETS":
      return action.payload;
    case "ADD_TICKET":
      const updatedState = [...state, action.payload];
      return updatedState;

    default:
      return state;
  }
}
