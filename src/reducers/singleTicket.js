export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_SINGLE_TICKET":
      return action.payload;
    case "EDIT_TICKET":
      return action.payload;
    // const editedState = state.map(ticket => {
    //   if (ticket.id === action.payload.id) {
    //     return action.payload;
    //   }
    //   return ticket;
    // });
    // return editedState;
    default:
      return state;
  }
}
