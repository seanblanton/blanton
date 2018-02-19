import Link from 'next/link'
import styled from "styled-components";
import { colors, fontSizes, transition } from "./../config";

const Wordmark = styled.p`
	color: ${colors.gray3};
	cursor: pointer;
	font-size: ${fontSizes[2]};
	text-decoration: none;
	transition: ${transition};
  &:hover {
    color: ${colors.gray1};
		transition: ${transition};
  }
`

export default () => (
  <Link prefetch href="/" passHref>
    <Wordmark> &#9442; </Wordmark>
  </Link>
)
