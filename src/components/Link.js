import React from 'react';

const Link = ({ href, text }) => {
	return (
		<a href={href}>{text}</a>
	)
}

Link.propTypes = {
  'text': React.PropTypes.string.isRequired,
  'href': React.PropTypes.string.isRequired
};

export default Link;