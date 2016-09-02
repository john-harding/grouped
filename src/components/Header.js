import React from 'react';
import LoggedIn from './LoggedIn';
import SmartTextarea from '../containers/SmartTextarea';

const Header = (props) => {
		return (
			<header>
				<nav>
					<div>Grouped</div>
					<ul>
						{(() => {
							switch(props.user.loggedIn) {
                case true:
                  return (
                    <LoggedIn user={props.user} />
                  );
                case false:
                default:
                  return (
                    <li><a href="/login">Login</a></li>
                  )
              }
						})()}
					</ul>
          <SmartTextarea />
				</nav>
			</header>
		);
}

export default Header;