import Head from "next/head";
import { Header } from "pokedex-components";
import { Logger } from "pokedex-utils";

export default function Home() {
  Logger();
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
