/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { Icon } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import SidebarItem from './SidebarItem';
import navs from './navs';
import avater from '../../../assets/avater.svg';

const Sidebar = ({ toggler, isOpen }) => {
	return (
		<div>
			<div className={isOpen ? 'sidebar' : 'sidebar is-close'}>
				<h1 className="sidebar-logo">
					{'<'}Team<span>Work{'/>'}</span>
				</h1>
				<div className="item">
					<img alt="logo" width="100%" src={avater} />
				</div>
				<ul>
					{navs.map((nav) => (
						<SidebarItem key={nav.link} link={nav.link} iconName={nav.iconName} content={nav.content} />
					))}
				</ul>
			</div>
			<div onClick={() => toggler()} role="button" tabIndex="0" className={isOpen ? 'nav-btn' : 'nav-btn close-btn'}>
				{isOpen ? <Icon name="times" size="large" /> : <Icon name="bars" size="large" />}
			</div>
		</div>
	);
};

Sidebar.propTypes = {
	toggler: PropTypes.func.isRequired,
	isOpen: PropTypes.bool.isRequired,
};

export default Sidebar;
