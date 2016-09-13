import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Header from '../components/Header';
import {connect} from 'react-redux';

// const user = {
//     user: {
//       loggedIn: true,
//       username:"john",
//       url:"/john"
//     },
//     content: {
//       editing: false
//     }
// };

const mapStateToProps = (state) => {
  return {
    data: state
  }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header user={this.props.data.user} />
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default connect(mapStateToProps)(App);
// export default App;