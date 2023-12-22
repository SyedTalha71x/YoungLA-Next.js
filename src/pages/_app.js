import '@/styles/globals.css'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Footer from '@/components/Footer'
import Head from 'next/head'


export default function App({ Component, pageProps }) {
  return <>
    <Navbar />
    <Head>
      <title>Lifestyle Clothing Brand: YoungLA </title>
      <meta name='viewport' content="width=device-width , initial-scale=1.0 , minimum-scale=1.0" />
      <link rel="icon" href="/mianlogo.jpg" />
    </Head>
    <Component {...pageProps} />
    <Footer /> </>
}
