import React from 'react'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import Prism from 'prismjs'
import { colors, fontSizes, fontFamily, spacing, transition} from "./../config";
import { px } from "./../util/";

export const blockquote = styled.blockquote`
  border-left: 4px solid ${colors.gray3};
  font-size: ${fontSizes[4]};
  font-style: italic;
  margin: ${px(spacing[6])} 0;
  padding: ${px(spacing[2])} ${px(spacing[4])};
`

export const inlineCode = styled.code`
  background-color: ${colors.indigo0};
  color: ${colors.indigo2};
  font-family: ${fontFamily.code};
  padding: ${px(spacing[1])};
`

export const code = props => {
  var html = Prism.highlight(props.value, Prism.languages[props.language]);
  var cls = props.language ? 'language-' + props.language : 'language-javascript';

  return (
  <Pre className={cls} {...props} children={props.value}>
    <code
      dangerouslySetInnerHTML={{__html: html}}
      className={cls}
    />
  </Pre>
);
}


export const heading = styled.h3`
    color: ${props => props.level > 4 ? colors.gray2 : colors.gray1 };
    font-size: ${props => fontSizes[props.level] || '1em'};
    font-weight: 600;
    font-style: ${props => props.level === 5 ? 'italic' : null };
    line-height: ${props => props.level < 3 ? 1.25 : 1.5 };
    margin-top: ${px(spacing[4])};
    margin-bottom:  ${px(spacing[2])};
    padding: 0;

`

export const listItem = styled.li`
  list-style: none;
  margin-bottom: ${px(spacing[3])};
  &::before {
    content: '•';
    color: ${colors.gray2 };
    margin-right: ${px(spacing[4])};
    width: 1em;
    margin-left: -2em;
  }
`

export const link = styled.a`
  border-bottom: 2px solid ${colors.gray2};
  cursor: pointer;
  color: ${colors.gray2};
  padding-bottom: 2px;
  text-decoration: none;
  transition: ${transition};
  &:hover {
    border-bottom: 2px solid ${colors.indigo2};
    color: ${colors.indigo2};
    padding-bottom: 2px;
  }
`

export const paragraph = styled.p`
  color: ${colors.gray2};
  font-family: inherit;
  font-size: ${fontSizes[4]};
  line-height: 1.75;
  margin: 0;
  padding-bottom: 1em;

`

export const Pre = styled.pre`
  font-family: ${fontFamily.code};
  font-size: ${fontSizes[5]};
  padding: ${px(spacing[5])};
  margin: 2em 0;
  white-space: pre-wrap;
  background-color: ${colors.gray4};
`

export const renderers = {
  inlineCode,
  code,
  blockquote,
  paragraph,
  link,
  listItem,
  heading,
}

const Markdown = props => (
  <ReactMarkdown
    source={props.children}
    renderers={renderers}
  />
)

export default Markdown
