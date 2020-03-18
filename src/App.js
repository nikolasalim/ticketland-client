import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import EventListContainer from "./components/EventListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";
import TicketDetailsContainer from "./components/TicketDetailsContainer";
import { Redirect } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/ticket/:ticketId" component={TicketDetailsContainer} />
          <Route path="/event/:eventId" component={EventDetailsContainer} />
          <Route path="/" component={EventListContainer} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
