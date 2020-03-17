import { combineReducers } from "redux";
import user from "./user";
import events from "./events";
import singleEvent from "./singleEvent";
import tickets from "./tickets";
import singleTicket from "./singleTicket";

export default combineReducers({
  user,
  events,
  singleEvent,
  tickets,
  singleTicket
});
