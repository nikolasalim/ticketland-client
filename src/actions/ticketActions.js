import request from "superagent";
const baseUrl = "http://localhost:4000";

// Reading all tickets:

export const GET_ALL_TICKETS = "GET_ALL_TICKETS";
function gettingTickets(payload) {
  return {
    type: GET_ALL_TICKETS,
    payload
  };
}

export const getTickets = () => (dispatch, getState) => {
  request(`${baseUrl}/ticket`)
    .then(response => {
      const action = gettingTickets(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Creating an ticket:

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

// Updating an ticket:

export const EDIT_TICKET = "EDIT_TICKET";
function edditingTicket(payload) {
  return {
    type: EDIT_TICKET,
    payload
  };
}

export const editTicket = (ticketId, data) => (dispatch, getState) => {
  const state = getState();
  const { user, singleEvent } = state;

  data.eventId = singleEvent.id;

  request
    .put(`${baseUrl}/ticket/${ticketId}`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = edditingTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Reading a specific ticket:

export const GET_SINGLE_TICKET = "GET_SINGLE_TICKET";
function gettingSingleTicket(payload) {
  return {
    type: GET_SINGLE_TICKET,
    payload
  };
}

export const getSingleTicket = ticketId => (dispatch, getState) => {
  request(`${baseUrl}/ticket/${ticketId}`)
    .then(response => {
      const action = gettingSingleTicket(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
