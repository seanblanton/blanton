import React from 'react'
import { spacing } from './../config';
import Link from 'next/link'
import styled from "styled-components";

import {Subtitle} from './Text'
import Box from "./Box"
import StyledLink from "./StyledLink"
import Wordmark from "./Wordmark"

const Header = props => {
	return (
		<React.Fragment>
			<StyledLink href="/">
				<Subtitle> ← Home </Subtitle>
			</StyledLink>
		</React.Fragment>
	);
};

export default Header;
