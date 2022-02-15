import type { AppProps } from 'next/app';
import Head from 'next/head';
import Footer from '../components/Footer/Footer';
import Nav from '../components/Nav/Nav';
import Banner from '../components/Banner/Banner';
import LiveBookClass from '../components/LiveBookClass/LiveBookClass';
import { GlobalStyle } from '../styles/GlobalStyle';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Hodoolabs</title>
      </Head>
      <GlobalStyle />
      <Nav />
      <Banner />
      <LiveBookClass />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
