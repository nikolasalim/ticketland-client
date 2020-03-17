export default function(state = [], action = {}) {
  switch (action.type) {
    case "GET_ALL_EVENTS":
      return action.payload;
    // case "GET_SINGLE_EVENT":
    //   const statePlusEvent = { ...state, singleEvent: action.payload };
    //   return statePlusEvent;
    case "ADD_EVENT":
      const updatedState = { ...state, list: [action.payload, ...state.list] };
      return updatedState;
    default:
      return state;
  }
}
