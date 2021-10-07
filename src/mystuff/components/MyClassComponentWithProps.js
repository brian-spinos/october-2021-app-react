import React from 'react';

class MyClassComponentWithProps extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div className="myComponent">
        <h3>Class Component (with props)</h3>
        <p>fruit: {this.props.fruit}</p>
      </div>
    );
  }
}

export default MyClassComponentWithProps;
