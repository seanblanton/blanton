import Link from 'next/link'
import styled from "styled-components";
import { colors, transition } from "./../config";

const StyledLink = styled.a`
	color: ${colors.gray1};
	cursor: pointer;
	text-decoration: none;
	transition: ${transition};
  &:hover {
    color: ${colors.indigo2};
    padding-bottom: 2px;
    border-bottom: 2px solid ${colors.indigo2};
		transition: ${transition};
  }
`

export default ({ href, as, key, children }) => (
  <Link prefetch href={href} as={as} key={key} passHref>
    <StyledLink>{children}</StyledLink>
  </Link>
)
