import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="UTF-8" />
        <title>Luxury Skin Care & Beauty</title>
        {/* SEO */}
        <meta name="description" content="Luxury skincare routine and premium beauty product recommendations" />
        <meta name="keywords" content="skincare routine, luxury beauty, affiliate beauty products" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Bootstrap import handled in _app.jsx for SSR consistency */}
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
