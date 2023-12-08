import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme/theme";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Component {...pageProps} />
      <Analytics />
      <SpeedInsights />
    </ChakraProvider>
  );
}
