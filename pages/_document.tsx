import Document, { Html, Head, Main, NextScript } from "next/document";
import siteData from "../data/site.js";

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <meta charSet='utf-8' />
          <meta name='description' content={siteData.description} />
          <meta
            name='viewport'
            content='initial-scale=1.0, width=device-width'
          />
          <link rel='icon' href='favicon.svg' type='image/svg+xml' />
          <link rel='icon' href='/favicon.png' type='image/png' />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
