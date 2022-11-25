import React, { Component } from 'react';
import { render } from 'react-dom';
import Login from 'src/screens/Login'
import Signup from 'src/screens/Signup'
import MainScreen from 'src/screens/MainScreen'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class App extends Component {
	render() {
		return (
			<Router>
				<Switch>
		          <Route exact path="/">
		            <Login />
		          </Route>
		          <Route path="/signup">
		            <Signup />
		          </Route>
		          <Route exact path="/main">
		            <MainScreen />
		          </Route>
		        </Switch>
			</Router>

		);
	}
}

render(<App />, window.document.getElementById('root'))
