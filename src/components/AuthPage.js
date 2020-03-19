import React from "react";
import LoginFormContainer from "./LoginFormContainer";
import SignupFormContainer from "./SignupFormContainer";
import CreateEventFormContainer from "./CreateEventFormContainer";
import EventList from "./EventList";
import { connect } from "react-redux";
import EventListContainer from "./EventListContainer";

class AuthPage extends React.Component {
  render() {
    if (!this.props.user) {
      return (
        <div>
          <LoginFormContainer />
          <SignupFormContainer />
        </div>
      );
    } else {
      return <EventListContainer />;
    }
    // else {
    //   if (this.props.events.list.length === 0) {
    //     return (
    //       <div>
    //         <h2>Check out the events:</h2>
    //         <p>
    //           Sorry, there are currently no events available. Create yours right
    //           now:
    //         </p>
    //         <CreateEventFormContainer />
    //       </div>
    //     );
    //   }
    //   return (
    //     <div>
    //       <CreateEventFormContainer />
    //       <EventList events={this.props.events} />
    //       <button onClick={this.previousHandler}>PREVIOUS</button>
    //       <button onClick={this.nextHandler}>NEXT</button>
    //     </div>
    //   );
    // }

    // return (
    //   <div>
    //     <LoginFormContainer />
    //     <SignupFormContainer />
    //     {/* <Link to="/event">Or click here to browse around.</Link> */}
    //   </div>
    // );
  }
}

function mapStateToProps(state) {
  return { user: state.user, events: state.events };
}

export default connect(mapStateToProps)(AuthPage);

// export default LoginForm;
