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
      <link rel='icon' href='favicon.svg' type='image/svg+xml' />
      <link rel='icon' href='/favicon.png' type='image/png' />
    </Head>
    <Header showTitle={showTitle}>
      {showTitle && (
        <Link href='/'>
          <Title>{siteData.title}</Title>
        </Link>
      )}
      <ThemeSettings />
    </Header>
    {children}
  </Wrapper>
);

export default Layout;
