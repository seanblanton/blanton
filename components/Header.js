import React from 'react'
import { spacing } from './../config';
import Link from 'next/link'
import {Title, Subtitle, Paragraph} from './Text'
import Box from "./Box"


const Header = props => {
	return (
		<Box pb={spacing[3]}>
			<Link href="/">
				<Title>
					Sean Blanton
				</Title>
			</Link>

			<Subtitle> Product Designer at Facebook </Subtitle>
			<Paragraph> Working on building scalable design systems </Paragraph>
		</Box>
	);
};

export default Header;
