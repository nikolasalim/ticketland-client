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

// Reading all comments

export const GET_ALL_COMMENTS = "GET_ALL_COMMENTS";
function gettingAllComments(payload) {
  return {
    type: GET_ALL_COMMENTS,
    payload
  };
}

export const getAllComments = () => (dispatch, getState) => {
  const state = getState();
  const { comments } = state;

  request(`${baseUrl}/comment`)
    .then(response => {
      const action = gettingAllComments(response.body);
      dispatch(action);
    })
    .catch(console.error);
};
