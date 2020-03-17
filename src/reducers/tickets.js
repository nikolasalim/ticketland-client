export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_ALL_TICKETS":
      return action.payload;
    case "ADD_TICKET":
      const updatedState = [...state, action.payload];
      return updatedState;
    case "EDIT_TICKET":
      const editedState = state.map(ticket => {
        if (ticket.id === action.payload.id) {
          return action.payload;
        }
        return ticket;
      });
      return editedState;
    default:
      return state;
  }
}
