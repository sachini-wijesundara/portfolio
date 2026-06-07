import Head from 'next/head';
import "@/styles/globals.css";
import { profile } from '../data/projects';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta name="keywords" content="developer, portfolio, full-stack, AI, ML, AR, Flutter, React, Next.js, Java, Python, Sri Lanka" />
        <meta name="author" content={profile.name} />

        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${profile.name} - ${profile.title}`} />
        <meta property="og:description" content={`${profile.tagline}. Specialized in building apps using Flutter, Next.js, and ML models.`} />
        <meta property="og:site_name" content={`${profile.name} Portfolio`} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} - ${profile.title}`} />
        <meta name="twitter:description" content={profile.tagline} />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
