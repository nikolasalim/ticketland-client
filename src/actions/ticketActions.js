import request from "superagent";
const baseUrl = "http://localhost:4000";

// Creating an ticket

export const ADD_TICKET = "ADD_TICKET";
function addingTicket(payload) {
  return {
    type: ADD_TICKET,
    payload
  };
}

export const addTicket = data => (dispatch, getState) => {
  const state = getState();
  const { user, singleEvent } = state;

  data.eventId = singleEvent.id;

  request
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = addingTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
