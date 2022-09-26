import "../styles/globals.css";
import "@/styles/App.css";
import type { AppProps } from "next/app";
import { useRef } from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ChakraProvider } from "@chakra-ui/react";

function MyApp({ Component, pageProps }: AppProps) {
  const queryClient = useRef(
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: false,
          useErrorBoundary: false,
          refetchOnWindowFocus: false
        }
      }
    })
  );

  return (
    <ChakraProvider resetCSS={true}>
      <QueryClientProvider client={queryClient.current}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </ChakraProvider>
  );
}

export default MyApp;
