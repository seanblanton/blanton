import React, { ReactNode } from "react";
import Head from "next/head";
import { Atoms, Link } from "@/system";
import styled from "@emotion/styled";
import siteData from "../data/site.js";
import { ThemeSettings } from "@/components";

type Props = {
	children?: ReactNode;
	showTitle?: boolean;
};

const Wrapper = styled.main`
	margin: 0 auto;
	padding: ${Atoms.spacing.xlarge} ${Atoms.spacing.large};
	max-width: calc(var(--font-size) * 64);
	min-height: 100vh;
`;

const Header = styled.main<Props>`
	display: flex;
	flex-direction: ${(props) => (props.showTitle ? `row` : "row-reverse")};
	margin: 0 auto;
	min-height: 36px;
	justify-content: space-between;
`;

const Title = styled.h2`
	font-size: ${Atoms.font.size.large};
	font-weight: ${Atoms.font.weight.semi};
	line-height: ${Atoms.font.lineHeight.body};
`;

const Layout = ({ children, showTitle }: Props) => (
	<Wrapper>
		<Head>
			<title>
				{siteData.title} — {siteData.role}
			</title>
			<meta charSet="utf-8" />
			<meta name="viewport" content="initial-scale=1.0, width=device-width" />
			<link rel="preconnect" href="https://fonts.gstatic.com" />
			<link
				href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
				rel="stylesheet"
			/>
		</Head>
		<Header showTitle={showTitle}>
			{showTitle && (
				<Link href="/">
					<Title> Sean Blanton </Title>
				</Link>
			)}
			<ThemeSettings />
		</Header>
		{children}
	</Wrapper>
);

export default Layout;
