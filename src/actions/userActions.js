import request from "superagent";
const baseUrl = "http://localhost:4000";

// Logging in and sending a JWT:

export const JWT = "JWT";
function getJWT(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (username, password) => dispatch => {
  const data = { username: username, password: password };
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = getJWT(response.body);
      dispatch(action);
    })
    .catch(console.error);
};

// Singing up:

export const SIGN_UP = "SIGN_UP";
function newUser(payload) {
  return {
    type: SIGN_UP,
    payload
  };
}

export const signup = (username, password) => dispatch => {
  const data = { username: username, password: password };
  request
    .post(`${baseUrl}/user`)
    .send(data)
    .then(response => {
      const action = newUser(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
