import React from 'react';
import styled from 'styled-components';
import { breakpoints, colors, fontSize } from './../config';

export const Headline = styled.h1`
	font-size: ${fontSize.xl};
	font-weight: 700;
	line-height: 1.25;
	margin: 1.5em 0 0.5em;

	${breakpoints.medium} {
		font-size: ${fontSize.xxl};
	}

	${breakpoints.large} {
		font-size: ${fontSize.xxxl};
	}
`;

export const H1 = styled.h1`
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
`;

export const H3 = styled.h3`
	color: ${colors.gray1};
	font-size: ${fontSize.l};
	line-height: 1.25;
	margin: 0;
	padding-top: 2rem;
	padding-bottom: 1rem;

	${breakpoints.medium} {
		font-size: ${fontSize.xl};
	}
`;
export const H4 = styled.h4`
	color: ${colors.gray1};
	font-size: ${fontSize.m};
	font-weight: 400;
	line-height: 1.25;
	margin: 0;
	padding-top: 2rem;
	padding-bottom: 0.5rem;

	${breakpoints.medium} {
		font-size: ${fontSize.l};
	}
`;

export const H5 = styled.p`
	color: ${colors.gray3};
	font-size: ${fontSize.l};
	font-weight: 400;
	line-height: 1.25;
	margin: 0;
	padding: 0;
`;

export const H6 = styled.h6`
	color: ${colors.gray3};
	font-size: ${fontSize.s};
	font-weight: 400;
	line-height: 1.25;
	margin: 0;
	padding: 0;

	${breakpoints.medium} {
		font-size: ${fontSize.m};
	}
`;

export const Meta = styled.p`
	color: ${colors.gray3};
	font-size: ${fontSize.s};
	font-weight: 400;
	line-height: 1.25;
	margin: 0;
	padding: 0;

	${breakpoints.medium} {
		font-size: ${fontSize.m};
	}
`;

export const P = styled.p`
	color: ${colors.gray1};
	font-size: ${fontSize.m};
	line-height: 1.25;
	margin: 0;
	padding-bottom: 2rem;

	${breakpoints.medium} {
		font-size: ${fontSize.m};
	}
`;
