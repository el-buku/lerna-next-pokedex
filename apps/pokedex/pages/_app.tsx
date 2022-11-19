import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Pokedex Next App</title>
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
