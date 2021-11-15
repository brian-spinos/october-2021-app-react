import '../css/myStyles.css';
import PropTypes from 'prop-types';

const MyComponentWithPropTypes = (props) => {
	return(
		<div className="myComponent">
			Hello from MyComponentWithPropTypes
			<br/>
			title: {props.title}
			<br/>
			<button onClick={props.action}>
				action!
        	</button>
		</div>
	);
}

MyComponentWithPropTypes.defaultProps = {
  title: 'aaa',
  action: () => {alert('detault action')}
}

MyComponentWithPropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired
}

export default MyComponentWithPropTypes;
