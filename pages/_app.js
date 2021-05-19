import { createGlobalStyle } from "styled-components";
import Head from "next/head";
import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  body {
    background: #f2f2f2;
    color: #333;
    font-family: "Nunito";
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" key="link" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap"
          rel="stylesheet"
          key="link"
        />
      </Head>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
