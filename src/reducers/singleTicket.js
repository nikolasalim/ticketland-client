export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_SINGLE_TICKET":
      return action.payload;
    case "EDIT_TICKET":
      return action.payload;
    default:
      return state;
  }
}
