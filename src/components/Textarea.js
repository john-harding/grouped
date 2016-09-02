import React from 'react';

const Textarea = ({style,children}) => {
	return (
		<textarea style={style}>{children}</textarea>
	)
}

Textarea.propTypes = {
    style: React.PropTypes.object.isRequired,
    children: React.PropTypes.string
}
Textarea.defaultProps = {
	children: "toggle this w/ redux"
}

export default Textarea;