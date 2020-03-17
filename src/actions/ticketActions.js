import request from "superagent";
const baseUrl = "http://localhost:4000";

// Reading all tickets

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

// // Reading tickets from a specific event

// export const GET_ALL_TICKETS = "GET_ALL_TICKETS";
// function gettingTickets(payload) {
//   return {
//     type: GET_ALL_TICKETS,
//     payload
//   };
// }

// export const getTickets = eventId => (dispatch, getState) => {
//   request(`${baseUrl}/ticket`)
//     // request(`${baseUrl}/ticket/${eventId}`)
//     .then(response => {
//       const action = gettingTickets(response.body);
//       console.log("action in get tickets is", action);
//       // action.payload.eventId = eventId;
//       // console.log("does action get the event id?", action);

//       dispatch(action);
//     })
//     .catch(console.error);
// };
