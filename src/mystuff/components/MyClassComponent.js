import React from 'react';
import { connect } from 'react-redux'; // connect class components to redux

import counterActions from '../actions/counterActions';
//import fooActions from '../actions/fooActions';

// Redux:
//=> We now recommend using the React-Redux hooks API as the default. However, the connect API still works fine.

class MyClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      varB: 0
    };
  }

  componentDidMount() {
    document.title = `varB: ${this.state.varB}`;
  }
  componentDidUpdate() {
    document.title = `varB: ${this.state.varB}`;
  }

  updateVarB = () => {
    this.setState({...this.state, varB: this.state.varB + 1});
  }

  counterActions_actionA = () => {
    this.props.counterActions_actionA(2222)
  }

  render() {
    let varA = 'abc';

    return (
      <div className="myComponent">
        <h3>Class Component</h3>
        <p>varA: {varA}</p>
        <p>state.varB: {this.state.varB}</p>
        <p>REDUX_STATE.counter.theCount: {this.props.theCount}</p>

        <button onClick={this.updateVarB}>
          update state.varB
        </button>

        <button onClick={this.counterActions_actionA}>
          update REDUX_STATE.counter.theCount
        </button>

      </div>
    );
  }
}

//=================== Connect class component to redux =========================
/**
 * maps something from redux store's to class component's this.props.xxx
 */
const mapStateToProps = (state, ownProps) => {
  // ... computed data from state and optionally ownProps
  return {
    theCount: state.counter.theCount
  };
};

/**
 * lets you provide action dispatching functions as props
 */
const mapDispatchToProps = {
  // ... normally is an object full of action creators
  counterActions_actionA: counterActions.actionA

}
//==============================================================================

export default connect(mapStateToProps, mapDispatchToProps)(MyClassComponent);
