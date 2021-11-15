import '../css/myStyles.css';
import PropTypes from 'prop-types';



const MyComponentWithPropTypes = (props) => {
	return(
		<div className="myComponent">
			Hello from MyComponentWithPropTypes
			<br/>
			title: {props.title}
		</div>
	);
}


MyComponentWithPropTypes.defaultProps = {
  title: 'aaa'
}


MyComponentWithPropTypes.propTypes = {
  title: PropTypes.string.isRequired
  // PropTypes.func.isRequired
}

export default MyComponentWithPropTypes;