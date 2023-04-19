import { RecoilRoot } from "recoil";
import "../styles/globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <RecoilRoot>
      <Head>
        <title>
          Curso: Profissionalizando o gerenciamento de estados no React.
        </title>
      </Head>
      <Component {...pageProps} />
    </RecoilRoot>
  );
}

export default MyApp;
