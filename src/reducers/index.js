import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import singleEvent from "./singleEvent";

export default combineReducers({
  user,
  events,
  singleEvent
});
