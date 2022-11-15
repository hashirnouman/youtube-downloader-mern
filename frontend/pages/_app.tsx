import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { dark, myTheme } from "../my-theme";
import Layout from "../Layout/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={dark}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
