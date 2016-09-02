import React from 'react';
import {connect} from 'react-redux';
import {editContent} from '../redux/modules/actions';
import Textarea from '../components/Textarea';
import Button from '../components/Button';

const mapStateToProps = (state) => {
	return {
		style: {display: state.content.editing ? "block" : "none"}
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(editContent());
		}
	}
}

const SmartTextarea = ({style, onClick}) => {
	return (
		<div>
			<Textarea style={style} />
			<Button onClick={onClick} text="Toggle" />
		</div>
	)
}

export default connect(mapStateToProps, mapDispatchToProps)(SmartTextarea);