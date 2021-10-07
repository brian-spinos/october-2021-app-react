const MyParentComponent = (props) => {
  return(
    <div className="myComponent">
      <h1>MyParentComponent</h1>
      {props.children}
      {props.children}
      {props.children}
    </div>
  );
}

export default MyParentComponent;
