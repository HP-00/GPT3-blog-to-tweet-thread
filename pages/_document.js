import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta
          property="og:title"
          content="blog post to tweet thread"
          key="title"
        />
        <meta
          property="og:description"
          content="transform your blog post into a tweet thread"
          key="description"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
