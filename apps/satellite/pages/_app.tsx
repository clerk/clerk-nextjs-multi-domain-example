import { ClerkProvider } from "@clerk/nextjs";
import { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "../components/Layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ClerkProvider isSatellite {...pageProps}>
      <Head>
        <title>Satellite Next.js app</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ClerkProvider>
  );
}
