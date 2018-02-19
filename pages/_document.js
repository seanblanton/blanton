import Document, { Head, Main, NextScript } from 'next/document'
import {injectGlobal,  ServerStyleSheet } from 'styled-components'
import { colors, fontFamily, spacing, hostname, transition } from './../config';

// eslint-disable-next-line
injectGlobal`
  * { box-sizing: border-box }
  html, body {
    color: ${colors.gray3};
    font-family: ${fontFamily.sansSerif};
    height: 100%;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    position: relative;
    transition: ${transition};
    width: 100%;
  }
  ::selection {
    background: #FFFCA0; /* WebKit/Blink Browsers */
  }
`;

export default class MyDocument extends Document {
	render() {
		const sheet = new ServerStyleSheet();
		const main = sheet.collectStyles(<Main />);
		const styleTags = sheet.getStyleElement();

		return (
			<html>
				<Head>
          <meta charset="UTF-8"/>
          <meta name="description" content="Sean Blanton is a product designer living in Seattle building design systems and tools at Facebook" />
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <meta name="google-site-verification" content="JE7y-INK0WYZeEZ024e6AmCqmNYQ0ORHvgihEn1B-Qk" />
          <link rel="icon" type="image/x-icon" href={`${hostname}/static/favicon.ico?v=1.3`}/>
          <link href={`${hostname}/static/prism.css`} rel='stylesheet' />
					{/* ... */}
					{styleTags}
				</Head>

				<body>
					<div className="root">
						{main}
					</div>
					<NextScript />
          <script href={`${hostname}/static/prism.js`}> </script>
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-29141738-1"></script>
				</body>
			</html>
		);
	}
}
