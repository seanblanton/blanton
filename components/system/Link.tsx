import styled from "@emotion/styled";
import { default as NextLink } from "next/link";

const Wrapper = styled.span`
  display: inline;
  cursor: pointer;
  & a:hover {
    text-decoration: underline;
  }
`;

export default function Link({ children, id, href }: any) {
  const isExternal = href.startsWith("http");

  return (
    <Wrapper id={id}>
      {isExternal ? (
        <a href={href} target='_blank' rel='noreferrer'>
          {children}
        </a>
      ) : (
        <NextLink href={href} passHref>
          <a href={href}>{children}</a>
        </NextLink>
      )}
    </Wrapper>
  );
}
