import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import { colors, fontSizes, fontFamily, spacing} from "./../config";
import { px } from "./../util/";

export const Image = styled.div`
  width: 100vw;
  margin-left: -10vw;
  margin-right: -10vw;
  height: 100vh;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  background-image: url(${props => props.src});
`

export const Pre = styled.pre`
  font-family: ${fontFamily.code};
  padding: ${px(spacing[3])};
  margin: 0;
  white-space: pre-wrap;
  background-color: ${colors.gray3};
`

export const Paragraph = styled.p`
  font-family: inherit;
  font-size: 16;
  line-height: 1.75;
`

export const Heading = styled.h3`
    font-size: ${props => fontSizes[props.level] || '1em'};
    line-height: 1.25;
    font-weight: 400;
    color: ${props => props.level > 4 ? colors.gray2 : colors.gray1 };
    font-style: ${props => props.level === 5 ? 'italic' : null };;
    padding: 0;
    margin: ${props => props.level <= 3 ? px(spacing[6]) : 0 } 0 0;
`

export const Code = styled.code`
  font-family: ${fontFamily.code};
  padding: 4px;
  background-color: ${colors.gray3};
`

export const CodeBlock = props => <Pre {...props} children={props.literal} />

export const BlockQuote = styled.blockquote`
  font-size: ${fontSizes[2]};
  font-style: italic;
  line-height: 1.7;
  margin: ${px(spacing[6])} 0;
`

export const Link = styled.a`
  color: ${colors.indigo2};
  text-decoration: none;
  &:hover {
    padding-bottom: 2px;
    border-bottom: 2px solid ${colors.indigo2};
  }
`

export const Item = styled.li`
  &::before {
  }
`

const renderers = {
  Image,
  Code,
  CodeBlock,
  BlockQuote,
  Paragraph,
  Link,
  Item,
  Heading,
}

const Markdown = props => (
  <ReactMarkdown
    source={props.children}
    renderers={renderers}
  />
)

export default Markdown
