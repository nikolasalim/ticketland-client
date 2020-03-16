import React from "react";
import store from "./store/store";
import { Provider } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import EventListContainer from "./components/EventListContainer";
// import { connect } from "react-redux";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Switch>
          <Route path="/" component={EventListContainer} />
        </Switch>
      </Provider>
    );
  }
}

export default App;
