// import {
// 	GetStaticPaths,
// 	GetStaticProps,
// 	GetStaticPropsContext,
// 	GetStaticPropsResult,
// } from 'next';
// import { gql } from '@apollo/client';
// import { client } from '../../lib/apollo';
// import { CDN } from '@data';
// import Image from 'next/image';
// import { Column, Section, VideoPlayer } from 'components/Elements';

const Post = () => {
	// const { title, track, content, slug } = data;
	// const { trackLength, trackGuideVideo, trackCorners } = track;
	// console.log(data);
	return (
		<div>
			<h1>Test</h1>
			{/* <Section grid='600'>
				<Column>
					<div>
						<Image
							src={`${CDN}/track/${slug}/trackmap.png`}
							alt={slug}
							width={355}
							height={265}
							layout='responsive'
						/>
					</div>
				</Column>
				<Column></Column>
			</Section>
			<Section>
				<VideoPlayer url={trackGuideVideo} />
			</Section>
			<div dangerouslySetInnerHTML={{ __html: content }} /> */}
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
// 			data: { ...result.data.post, slug },
// 		},
// 	};
// };
