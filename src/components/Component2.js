import React, { Component } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";

class Component2 extends Component {
  render() {
    let user_text = "text1";
    return (
      <div>
        <button onClick={() => console.log(this.props.stateProp1)}>
          Get State
        </button>
        <button onClick={() => this.props.action1()}>Dispatch action1</button>

        <button onClick={() => this.props.action2()}>Dispatch action2</button>
        <button onClick={() => this.props.action_creator1()}>
          Dispatch action_creator1
        </button>

        <button onClick={() => this.props.action_creator2()}>
          Dispatch action_creator2
        </button>

        {/* call action creator with text */}
        <button onClick={() => this.props.action_creator3(user_text)}>
          Dispatch action_creator3
        </button>

        {/* render data to the UI */}
        {this.props.user_text ? <h1>{this.props.user_text}</h1> : null}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.reducer1.stateProp1,
    user_text: state.reducer2.user_text,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),

    // dispatch action creators
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),

    // dispatch action creator with data
    action_creator3: (text) => dispatch(ACTIONS.user_input(text)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
