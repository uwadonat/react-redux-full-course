import React, { Component } from "react";
import { connect } from "react-redux";

import * as ACTIONS from "../store/actions/actions";

class Component2 extends Component {
  render() {
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
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    stateProp1: state.stateProp1,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    action1: () => dispatch(ACTIONS.SUCCESS),
    action2: () => dispatch(ACTIONS.FAILURE),
    action_creator1: () => dispatch(ACTIONS.success()),
    action_creator2: () => dispatch(ACTIONS.failure()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Component2);
