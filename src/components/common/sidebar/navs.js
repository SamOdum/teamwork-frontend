const base = process.env.REACT_APP_HOME;

export default [
	{
		link: `/${base}`,
		iconName: 'feed',
		content: 'Feeds',
	},
	{
		link: `/${base}/gif`,
		iconName: 'smile outline',
		content: 'Gifs',
	},
	{
		link: `/${base}/article`,
		iconName: 'newspaper outline',
		content: 'Article',
	},
	{
		link: `/${base}/profile`,
		iconName: 'user outline',
		content: 'Profile',
	},
	{
		link: `/${base}/users`,
		iconName: 'users',
		content: 'Users',
	},
];
