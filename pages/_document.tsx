import { Head, Html, Main, NextScript } from 'next/document';
import Script from 'next/script';

export default function Document() {
	return (
		<Html>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link
					rel='preconnect'
					href='https://fonts.gstatic.com'
					crossOrigin='true'
				/>
				<link
					href='https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,400;0,700;1,400;1,700&display=swap'
					rel='stylesheet'
				/>
				{/* Google Analytics */}
				<Script
					async
					src='https://www.googletagmanager.com/gtag/js?id=G-FVVD7T5LYY'
				/>
				<script
					dangerouslySetInnerHTML={{
						__html: `
					 		window.dataLayer = window.dataLayer || [];
  							function gtag(){dataLayer.push(arguments);}
  							gtag('js', new Date());
  							gtag('config', 'G-FVVD7T5LYY');
				`,
					}}
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
