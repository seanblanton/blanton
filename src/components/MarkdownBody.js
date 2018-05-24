import React from 'react'
import styled from 'styled-components'
import { breakpoints, colors, fontSize, spacing, transition } from './../config'

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
		font-size: ${fontSize.m};
		font-weight: 400;
		line-height: 1.25;
		margin: 2em 0 1em;
		padding: 0;

		${breakpoints.medium} {
			font-size: ${fontSize.l};
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
		border-left: 2px solid ${colors.teal1};
		font-style: italic;
		margin: 3em 0;
		padding: 0 1.5em;
	}

	a {
		border-bottom: 3px solid ${colors.teal0};
		cursor: pointer;
		color: ${colors.teal2};
		padding-bottom: 2px;
		text-decoration: none;
		&:hover {
			border-bottom: 3px solid ${colors.teal2};
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

	p, ui, li, tr, tr {
		& code {
			background-color: ${colors.teal0};
			color: ${colors.teal2};
			padding: 0.3em 0.5em !important;
			margin: 0.2em;
		}
	}

	table {
		border-spacing: 0;
	}

	thead {
		font-weight: 700;
	}

	td , th {
		border-collapse: separate;
		border-bottom: 1px solid ${colors.gray4};
		padding: 0.75em 1em ;
		text-align: left !important;
	}
`
