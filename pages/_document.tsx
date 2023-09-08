import { Html, Head, Main, NextScript } from 'next/document'
import Header from './header'
import Footer from './footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>FLSD</title>
        <meta property="og:title" content="FLSD" key="title" />
        <meta
          name="description"
          content="Check out iPhone 12 XR Pro and iPhone 12 Pro Max. Visit your local store and for expert advice."
          key="desc"
        />
      </Head>
      <body className="bg-[#10172A] bg-[url('/bg.png')] bg-no-repeat bg-cover ">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
