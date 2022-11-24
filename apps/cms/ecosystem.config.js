const commonSetup = {
	repo: `git@github.com:jelmore1674/${process.env.GITHUB_REPOSITORY}`,
	path: '/var/www/slipstream-racing',
	user: 'ubuntu',
};

module.exports = {
	apps: [
		{
			name: 'cms',
			script: 'yarn cms start',
		},
	],

	deploy: {
		production: {
			...commonSetup,
			host: process.env.DEPLOYMENT_HOST,
			'post-deploy': 'bash .deploy-hooks/deploy-cms.sh production',
			ref: 'origin/main',
		},
	},
};
