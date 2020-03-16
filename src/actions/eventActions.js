import request from "superagent";
const baseUrl = "http://localhost:4000";

// Reading all events

export const GET_EVENTS = "GET_EVENTS";
function gettingEvents(payload) {
  return {
    type: GET_EVENTS,
    payload
  };
}

export const getEvents = () => (dispatch, getState) => {
  const state = getState();
  const { events } = state;
  if (!events.length) {
    request(`${baseUrl}/event`)
      .then(response => {
        const action = gettingEvents(response.body);
        dispatch(action);
      })
      .catch(console.error);
  }
};

// Creating an event

export const ADD_EVENT = "ADD_EVENT";
function addingEvent(payload) {
  return {
    type: ADD_EVENT,
    payload
  };
}

export const addEvent = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  request
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = addingEvent(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
