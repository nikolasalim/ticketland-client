import request from "superagent";
const baseUrl = "http://localhost:4000";

// Creating an event

export const ADD_COMMENT = "ADD_COMMENT";
function addingComment(payload) {
  return {
    type: ADD_COMMENT,
    payload
  };
}

export const addComment = data => (dispatch, getState) => {
  const state = getState();
  const { user } = state;

  console.log("data in commentAction is", data);

  request
    .post(`${baseUrl}/comment`)
    .set("Authorization", `Bearer ${user.jwt}`)
    .send(data)
    .then(response => {
      const action = addingComment(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// // Reading all events

// export const GET_ALL_EVENTS = "GET_ALL_EVENTS";
// function gettingEvents(payload) {
//   return {
//     type: GET_ALL_EVENTS,
//     payload
//   };
// }

// export const getEvents = () => (dispatch, getState) => {
//   const state = getState();
//   const { events } = state;
//   if (!events.length) {
//     request(`${baseUrl}/event`)
//       .then(response => {
//         const action = gettingEvents(response.body);
//         dispatch(action);
//       })
//       .catch(console.error);
//   }
// };
