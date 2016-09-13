import React from 'react';
import { Router, Route, browserHistory } from 'react-router';
import App from './pages/App';
import Home from './pages/home';

export default class Routes extends React.Component {
	render() {
		return (
			<Router history={ browserHistory }>
				<Route path="/" component={App} />
				<Route path="/home" component={Home} />
			</Router>
		);
	}
}