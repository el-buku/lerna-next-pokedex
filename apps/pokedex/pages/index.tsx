import Head from "next/head";
import { Header } from "pokedex-components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next Pokedex</title>
      </Head>
      <Header />
      <div>pokedex index</div>
    </>
  );
}
