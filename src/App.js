import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import EventListContainer from "./components/EventListContainer";
import EventDetailsContainer from "./components/EventDetailsContainer";
import TicketDetailsContainer from "./components/TicketDetailsContainer";
import AuthPage from "./components/AuthPage";
import "./scss/main.css";
import HeaderContainer from "./components/HeaderContainer";
import Footer from "./components/Footer";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <HeaderContainer />
        <Switch>
          <Route path="/ticket/:ticketId" component={TicketDetailsContainer} />
          <Route path="/event/:eventId" component={EventDetailsContainer} />
          <Route path="/event" component={EventListContainer} />
          <Route exact path="/" component={AuthPage} />
        </Switch>
        <Footer />
      </Provider>
    );
  }
}

export default App;
