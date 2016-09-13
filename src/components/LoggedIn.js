import React from 'react';
import Link from './Link';

const LoggedIn = (props) => {
	return (
		<li><Link href="/home" text={props.user.username} /></li>
	);
}

export default LoggedIn;