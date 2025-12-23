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
        {/* Bootstrap */}
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" />
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
