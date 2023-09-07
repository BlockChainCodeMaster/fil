import { Html, Head, Main, NextScript } from 'next/document'
import Header from './header'
import Footer from './footer'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="bg-[#10172A] bg-[url('/bg.png')] bg-no-repeat bg-cover ">
        <Header />
        <Main />
        <Footer />
        <NextScript />
      </body>
    </Html>
  );
}
