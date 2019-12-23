import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Sidebar from '../../common/sidebar';
import routes from '../../../routes';
import './style.css';

const Dashboard = () => {
	const [ sbOpen, setSbToggler ] = useState(true);

	const toggler = () => {
		return setSbToggler(!sbOpen);
	};

	return (
		<div className="wrapper">
			<Sidebar toggler={toggler} isOpen={sbOpen} />
			<div className={sbOpen ? 'main_content' : 'main_content open-main'}>
				<div className="info">
					<div>
						<Switch>
							{routes.map((route) => (
								<Route key={route.path} path={route.path} exact={route.exact}>
									{<route.content />}
								</Route>
							))}
						</Switch>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
