import React from 'react';

const MyFuncComponentWithProps = (props) => {
  return(
    <div className="myComponent">
      <h3>Functional Component (with props)</h3>
      <p>fruit: {props.fruit}</p>
    </div>
  );
}

export default MyFuncComponentWithProps;
