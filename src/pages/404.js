import React from 'react'
import { H3, H6, P } from './../components/Text'
import { SecondaryLink } from './../components/StyledLink.js'
import styled from 'styled-components'

const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`
const NotFoundPage = () => (
	<Container>
		<H3>Not Found</H3>
		<P>You just hit a route that doesn&#39;t exist... the sadness.</P>
		<SecondaryLink to="/">
			<H6> Return to Home </H6>
		</SecondaryLink>
	</Container>
)

export default NotFoundPage
