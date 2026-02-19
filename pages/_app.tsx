import type { AppProps } from "next/app";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "../app/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <SpeedInsights />
    </>
  );
}

export default MyApp;
