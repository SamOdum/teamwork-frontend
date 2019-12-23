import React from 'react';
import PropType from 'prop-types';
import { Link } from 'react-router-dom';
import { Icon } from 'semantic-ui-react';

const SidebarItem = ({ link, iconName, content }) => {
	return (
		<li>
			<Link to={link}>
				<Icon className="icon-bottom" name={iconName} size="large" />
				{content}
			</Link>
		</li>
	);
};

SidebarItem.propTypes = {
	link: PropType.string.isRequired,
	iconName: PropType.string.isRequired,
	content: PropType.string.isRequired,
};

export default SidebarItem;
