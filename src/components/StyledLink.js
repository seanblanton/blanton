import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'
import { colors } from './../config'

export const StyledLink = styled(Link)`
	text-decoration: none;
`

export const AccentLink = StyledLink.extend`
	color: ${colors.purpleDark};
	&:hover {
		text-decoration: underline;
	}
`

export const SecondaryLink = StyledLink.extend`
	&:hover {
		& h1,
		h2,
		h3,
		h4,
		h5,
		h6
		 {
			background: ${colors.purpleLight} !important;
			color: ${colors.purpleDark} !important;
		}
	}
`
