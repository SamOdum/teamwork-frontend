import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Signin from './components/views/signin';
import PrivateRoute from './components/common/PrivateRoute';
import Dashboard from './components/views/Dashboard';
import store from './store';
import './App.css';

const App = () => {
	return (
		<Provider store={store}>
			<Router basename={process.env.PUBLIC_URL}>
				<Switch>
					<PrivateRoute path="/dashboard" component={Dashboard} />
					{/* <Route path="/test" component={Dashboard} /> */}
				</Switch>
				<Route exact path="/" component={Signin} />
			</Router>
		</Provider>
	);
};

export default App;
