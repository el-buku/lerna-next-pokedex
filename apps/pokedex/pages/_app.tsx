import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
import { Provider } from "react-redux";
import { wrapper } from "pokedex-utils";

export default function App({ Component, ...rest }: AppProps) {
  const { store, props } = wrapper.useWrappedStore(rest);
  return (
    <Provider store={store}>
      <Head>
        <link rel="icon" href="/pokeball.ico" />
      </Head>
      <Component {...props.pageProps} />
    </Provider>
  );
}
