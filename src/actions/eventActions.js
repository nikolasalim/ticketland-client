import request from "superagent";
const baseUrl = "http://localhost:4000";

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
