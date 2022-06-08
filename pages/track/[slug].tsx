// import {
// 	GetStaticPaths,
// 	GetStaticProps,
// 	GetStaticPropsContext,
// 	GetStaticPropsResult,
// } from 'next';
// import { gql } from '@apollo/client';
// import { client } from '../../lib/apollo';

const Post = ({ data }: any) => {
	const { title, content } = data;
	return (
		<div>
			<h1>{title}</h1>
			{/* <div dangerouslySetInnerHTML={{ __html: content }} /> */}
		</div>
	);
};

export default Post;

// export const getStaticPaths: GetStaticPaths = async () => {
// 	const result = await client.query({
// 		query: gql`
// 			query GetTestWP {
// 				posts(where: { categoryName: "Track Information" }) {
// 					nodes {
// 						slug
// 					}
// 				}
// 			}
// 		`,
// 	});

// 	return {
// 		paths: result.data.posts.nodes.map(({ slug }: any) => ({
// 			params: {
// 				slug: slug,
// 			},
// 		})),
// 		fallback: false,
// 	};
// };

// type Params = {
// 	slug: string;
// };

// export const getStaticProps = async ({
// 	params,
// }: GetStaticPropsContext<Params>): Promise<GetStaticPropsResult<any>> => {
// 	let slug;
// 	slug = params ? params.slug : '';
// 	const result = await client.query({
// 		query: gql`
// 			query GetSingleTrack {
// 				post(id: "${slug}", idType: SLUG) {
// 					content
// 					title
// 					track {
// 						trackLength
// 						trackGuideVideo
// 						trackCorners
// 					}
// 				}
// 			}
// 		`,
// 	});
// 	return {
// 		props: {
// 			data: result.data.post,
// 		},
// 	};
// };
