/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['jelmoreassets.nyc3.cdn.digitaloceanspaces.com'],
	},
	reactStrictMode: true,
	env: {
		NEXT_PUBLIC_GRAPHQL_API: process.env.NEXT_PUBLIC_GRAPHQL_API,
	},
};

module.exports = nextConfig;
