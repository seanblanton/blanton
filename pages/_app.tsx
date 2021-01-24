import { AppProps } from "next/app";
import React, { useEffect } from "react";
import { DesignSystemProvider, ThemeProvider } from "@/system";
import getFonts from "@/utils/fonts.js";

import GlobalStyles from "@/components/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    getFonts();
  }, []);

  return (
    <ThemeProvider>
      <DesignSystemProvider>
        <GlobalStyles />
        <Component {...pageProps} />
      </DesignSystemProvider>
    </ThemeProvider>
  );
}
export default App;
