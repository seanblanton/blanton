import React from 'react'
import { spacing } from './../config';
import styled from "styled-components";

import {Title, Subtitle, Paragraph} from './Text'
import Box from "./Box"
import StyledLink from './StyledLink'

const Header = props => {
	return (
		<Box py={spacing[6]}>
			<StyledLink href="/">
				<Title>
					Sean Blanton
				</Title>
			</StyledLink>
			<Subtitle>
				I'm a product designer designing and building design systems and tools at Facebook.
			</Subtitle>
		</Box>
	);
};

export default Header;
