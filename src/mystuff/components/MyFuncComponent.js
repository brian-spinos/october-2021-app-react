import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import '../css/myStyles.css';


import counterActions from '../actions/counterActions';
//import fooActions from '../actions/fooActions';

// TODO: lifecycle hooks, list them here too:
//       - useState
//       - useEffect
//       - useContext
//       - ...
const MyFuncComponent = () => {
  let varA = 'abc';
  const [varB, setVarB] = useState(0);

  // Redux stuff
  const counter = useSelector(state => state.counter);
  const dispatch = useDispatch();

  // Similar to componentDidMount and componentDidUpdate:
  useEffect(() => {
    // Update the document title using the browser API
    document.title = `You clicked ${varB} times`;
  });

  //let myInnerHandlerA = () => {varA = 'abc-updated'}; // does not work
  let myInnerHandlerC = () => setVarB(varB + 1);
  let myInnerHandlerD = () => dispatch(counterActions.actionA(1111));

  return(
    <div className="myComponent">
      <h3>Functional Component</h3>
      <p>varA: {varA}</p>
      <p>state.varB: {varB}</p>
      <p>REDUX_STATE.counter.theCount: {counter.theCount}</p>

      <button onClick={myInnerHandlerC}>
        update state.varB
      </button>

      <button onClick={myInnerHandlerD}>
        update REDUX_STATE.counter.theCount
      </button>

    </div>
  );
}

export default MyFuncComponent;
