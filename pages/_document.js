import Document, { Head, Main, NextScript } from 'next/document'
import {injectGlobal,  ServerStyleSheet } from 'styled-components'
import { fontFamily, spacing, hostname } from './../config';



// eslint-disable-next-line
injectGlobal`
  * { box-sizing: border-box }
  html, body {
    position: relative;
    height: 100%;
    width: 100%;
    font-family: ${fontFamily.sansSerif};
    line-height: 1.5;
    margin: 0;
    padding: 0;
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
          <meta name="viewport" content="width=device-width,initial-scale=1"/>
          <link rel="icon" type="image/x-icon" href={`${hostname}/static/favicon.ico?v=1.3`}/>
					{/* ... */}

					{styleTags}
				</Head>

				<body>
					<div className="root">
						{main}
					</div>

					<NextScript />
				</body>
			</html>
		);
	}
}
