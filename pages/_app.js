import { createGlobalStyle } from "styled-components";

import Layout from "../components/Layout";

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap');

  body {
    background: #f2f2f2;
    color: #333;
    font-family: "Nunito";
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
