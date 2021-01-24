import { MDXProvider } from "@mdx-js/react";
import React, { ReactElement, ReactNode } from "react";
import * as DesignSystem from ".";

interface DesignSystemProviderProps {
	children: ReactNode;
}

export const components = {
	a: (props: any) => <DesignSystem.Link {...props} />,
	blockquote: (props: any) => <DesignSystem.Blockquote {...props} />,
	h1: (props: any) => <DesignSystem.H1 {...props} />,
	h2: (props: any) => <DesignSystem.H2 {...props} />,
	h3: (props: any) => <DesignSystem.H3 {...props} />,
	img: (props: any) => <DesignSystem.Image {...props} />,
	li: (props: any) => <DesignSystem.Li {...props} />,
	ol: (props: any) => <DesignSystem.Ol {...props} />,
	p: (props: any) => <DesignSystem.P {...props} />,
	code: (props: any) => <DesignSystem.Code {...props} />,
	pre: (props: any) => <DesignSystem.Pre {...props} />,
};

const DesignSystemProvider = (
	props: DesignSystemProviderProps
): ReactElement<typeof MDXProvider> => {
	const { children } = props;

	return <MDXProvider components={components}>{children}</MDXProvider>;
};

export default DesignSystemProvider;
