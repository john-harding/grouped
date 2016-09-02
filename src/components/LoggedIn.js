import React from 'react';
import Link from './Link';

const LoggedIn = (props) => {
	return (
		<li><Link href={props.user.url} text={props.user.username} /></li>
	);
}

export default LoggedIn;