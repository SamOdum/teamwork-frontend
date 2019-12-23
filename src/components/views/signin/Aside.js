import React from 'react';
import { Image } from 'semantic-ui-react';
import teamImg from '../../../assets/team.svg';

const Aside = () => {
	return (
		<div className="aside">
			<h1 className="logo">
				{'<'}Team<span>Work{'/>'}</span>
			</h1>
			<Image size="large" src={teamImg} centered />
		</div>
	);
};

export default Aside;
