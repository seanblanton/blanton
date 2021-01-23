import { AppProps } from "next/app";
import React from "react";
import { DesignSystemProvider, ThemeProvider } from "@/system";

import GlobalStyles from "@/components/GlobalStyles";

function App({ Component, pageProps }: AppProps) {
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
