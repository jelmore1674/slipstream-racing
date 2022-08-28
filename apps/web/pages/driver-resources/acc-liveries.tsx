import {
	ButtonGrid,
	DownloadButton,
	IFrame,
	PageHeading,
	PDFViewer,
	Section,
	VideoPlayer,
} from '@components';
import { CDN } from '@data';
import { SeoData } from '@types';
import type { NextPage } from 'next';
import Head from 'next/head';
import { Fragment } from 'react';
import { FaDownload } from 'react-icons/fa';

const imgPath = `${CDN}/driver-resources/acc-liveries`;

const seoData = {
	url: 'https://slipstreamracing.net/driver-resources/acc-liveries',
	title: 'ACC Custom Liveries | Slipstream Racing',
	description:
		'Upload your own custom liveries and allow your fellow racers to check out your kick-ass livery',
};

interface Props {
	seoData: SeoData;
}

const AccLiveries: NextPage<Props> = ({ seoData }) => {
	const { url, title, description } = seoData;
	return (
		<Fragment>
			<Head>
				<title>{title}</title>
				<meta property='og:title' content={title} key='ogtitle' />
				<meta property='og:url' content={url} key='ogurl' />
				<meta name='description' content={description} />
				<meta property='og:title' content={title} key='ogtitle' />
				<meta
					property='og:description'
					content={description}
					key='ogdesc'
				/>
			</Head>
			<PageHeading>ACC Custom Liveries</PageHeading>
			<Section grid='1200'>
				<h2>Uploading Custom Liveries</h2>
				<VideoPlayer url={`${imgPath}/uploading-liveries.mp4`} />
			</Section>
			<Section grid='1200'>
				<h2>Custom Liveries</h2>
				<ol>
					<li>
						To upload a custom livery the folder name must be in the
						following format (
						<i>
							SRL-First 3 Letters of Moniker Last
							Name-CAR-LIVERYNAME
						</i>
						) (Ex. <b>SRL-ELM-488EVO-TRASHPANDAS</b>)
					</li>
					<li>
						Try to keep the content of the liveries to PG-13
						content. If a livery has anything offensive report it to
						an Admin and it will be reviewed.
					</li>
					<li>
						Due to lag spike if using a custom livery try to join
						session during practice to be courteous to other
						drivers.
					</li>
				</ol>
			</Section>
			<PDFViewer pdf='/assets/renaming-liveries.pdf' singlePage />
			<Section grid='1200'>
				<a
					rel='noopener noreferrer'
					target='_blank'
					href='https://drive.google.com/drive/folders/1eN41OlAcwsud8-ukkE2qUk8kL7_iz3kS'>
					<h2>
						<i>
							Link to Google Drive Livery Folder (Please Click
							Here to Upload Livery)
						</i>
					</h2>
				</a>
				<IFrame
					src='https://drive.google.com/embeddedfolderview?id=1eN41OlAcwsud8-ukkE2qUk8kL7_iz3kS#list'
					width='100%'
					height='600px'
				/>
			</Section>
			<Section grid='1200'>
				<h2>TeamSync Setup</h2>
				<VideoPlayer url={`${imgPath}/teamsync-setup.mp4`} />
			</Section>

			<Section grid='1200'>
				<ButtonGrid grid='300px'>
					<DownloadButton
						href='https://www.racedepartment.com/downloads/teamsync.33521/'
						target={'_blank'}>
						TeamSync App
					</DownloadButton>
					<DownloadButton
						href={'/assets/teamsync/settings.json'}
						download
						color='green'>
						TeamSync Settings File
						<FaDownload />
					</DownloadButton>
				</ButtonGrid>
			</Section>
		</Fragment>
	);
};

export default AccLiveries;

export const getStaticProps = async () => {
	return {
		props: { seoData },
	};
};
