require('./../themes/prism.css');

import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import styled, { injectGlobal } from 'styled-components';

import {
	breakpoints,
	colors,
	fontFamily,
	spacing,
	hostname,
	transition
} from './../config';

injectGlobal`
	* {
		box-sizing: border-box
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
	}
  html, body {
    color: ${colors.gray1};
    font-family: ${fontFamily.sansSerif};
    font-size: 19px;
    height: 100%;
    line-height: 1.7;
    margin: 0;
    padding: 0;
    position: relative;
    transition: ${transition};
    width: 100%;

    ${breakpoints.medium} {
      font-size: 17px;
    }
  }
  ::selection {
    background: ${colors.gray4}; /* WebKit/Blink Browsers */
  }


`;

const Container = styled.div`
	max-width: 768px;
	margin: 0 auto;
	padding: 2em;
`;

const Layout = ({ children, data }) => (
	<Container>
		<Helmet
			title={data.site.siteMetadata.title}
			meta={[
				{
					name: 'description',
					content:
						'Sean Blanton is a Product Designer living in Seattle, Washington building design systems and tools at Facebook'
				},
				{
					name: 'keywords',
					content:
						'designer, product designer, seattle, ui, ux, design tools, design systems'
				},
				{
					name: 'google-site-verification',
					content: 'JE7y-INK0WYZeEZ024e6AmCqmNYQ0ORHvgihEn1B-Qk'
				}
			]}
		/>

		{children()}
	</Container>
);

Layout.propTypes = {
	children: PropTypes.func
};

export default Layout;

export const query = graphql`
	query SiteHeaderQuery {
		site {
			siteMetadata {
				title
				description
			}
		}
	}
`;
