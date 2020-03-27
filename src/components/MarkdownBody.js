import React from "react";
import styled from "styled-components";
import {
  breakpoints,
  colors,
  fontSize,
  spacing,
  transition
} from "./../config";

export const MarkdownBody = styled.div`
  h1 {
    color: ${colors.gray1};
    font-size: ${fontSize.xl};
    font-weight: 700;
    line-height: 1.25;
    margin: 0;
    padding-top: 2rem;
    padding-bottom: 1rem;

    ${breakpoints.medium} {
      font-size: ${fontSize.xxl};
    }
  }

  h2 {
    color: ${colors.gray1};
    font-size: ${fontSize.m};
    font-weight: 600;
    line-height: 1.25;
    margin: 2em 0 1em;
    padding: 0;

    ${breakpoints.medium} {
      font-size: ${fontSize.l};
    }
  }

  h3 {
    color: ${colors.gray1};
    font-size: ${fontSize.s};
    font-weight: 400;
    line-height: 1.5;
    margin: 2em 0 1em;
    padding: 0;

    ${breakpoints.medium} {
      font-size: ${fontSize.m};
    }
  }

  h4 {
    color: ${colors.gray1};
    font-size: ${fontSize.s};
    font-weight: 600;
    line-height: 1.25;
    margin: 2em 0 0.5em;
    padding: 0;

    ${breakpoints.medium} {
      font-size: ${fontSize.m};
    }
  }

  h5 {
    color: ${colors.gray3};
    font-size: ${fontSize.l};
    font-weight: 400;
    line-height: 1.25;
    margin: 0;
    padding: 0;
  }

  h6 {
    color: ${colors.gray3};
    font-size: ${fontSize.xs};
    line-height: 1.25;
    margin: 0;
    padding: 0;

    ${breakpoints.medium} {
      font-size: ${fontSize.s};
    }
  }

  p {
    color: ${colors.gray1};
    font-size: ${fontSize.s};
    line-height: 1.75;
    letter-spacing: 0;
    margin: 0em 0em 2em;
    padding: 0;

    ${breakpoints.medium} {
      font-size: ${fontSize.m};
    }
  }

  blockquote {
    border-left: 4px solid ${colors.gray4};
    font-style: italic;
    margin: 3em 0;
    padding: 0 1.5em;
  }

  a {
    border-bottom: 3px solid ${colors.purpleLight};
    cursor: pointer;
    color: ${colors.purple};
    padding-bottom: 2px;
    text-decoration: none;
    &:hover {
      border-bottom: 3px solid ${colors.purple};
    }
  }

  ul {
    margin: 2em 0;
  }

  li {
    padding-bottom: 1em;
  }

  pre {
    margin: 3em 0;
  }

  p,
  ui,
  li,
  tr,
  tr {
    font-size: ${fontSize.s};

    ${breakpoints.medium} {
      font-size: ${fontSize.m};
    }

    & code {
      background-color: ${colors.purpleLight};
      color: ${colors.purpleDark};
      font-size: ${fontSize.m};
      padding: 0.3em 0.5em !important;
      margin: 0.2em;

      ${breakpoints.medium} {
        font-size: ${fontSize.m};
      }
    }
  }

  table {
    border-spacing: 0;
  }

  thead {
    font-weight: 700;
  }

  td,
  th {
    border-collapse: separate;
    border-bottom: 1px solid ${colors.gray4};
    padding: 0.75em 1em;
    text-align: left !important;
  }
  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
  }
`;
