
import React from 'react'
import styled from "styled-components";
import { oneOf } from "prop-types";
import { colors, fontSizes, spacing, media, measure} from "./../config";
import { px, parseProps } from "./../util/";
import hoc from "./../util/hoc";


const config = {
	"title": {
		fontSize: fontSizes[0],
		lineHeight: 1.34,
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: colors.gray2,
		paddingBottom: px(spacing[3]),
	},
	"titleSecondary": {
		fontSize: fontSizes[2],
		fontWeight: 500,
		padding: 0,
		margin: 0,
		color: colors.gray2,
	},
	"subtitle": {
		fontSize: fontSizes[4],
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: colors.gray3,
		maxWidth: '75%',
	},
	"heading": {
		fontSize: fontSizes[3],
		fontWeight: 400,
		padding: 0,
		margin: 0,
	},
	"paragraph": {
		fontSize: px(fontSizes[4]),
		padding: 0,
		margin: 0,
		color: colors.gray3,
	},
	"paragraphSecondary": {
		fontSize: px(fontSizes[5]),
		padding: 0,
		margin: 0,
		color: colors.gray3,
	},
	"meta": {
		fontSize: px(fontSizes[6]),
		fontWeight: 600,
		letterSpacing: '0.1em',
		padding: 0,
		margin: 0,
		color: colors.gray3,
		textTransform: 'uppercase'
	}
}

const Text = styled(hoc()).attrs({
	as: props => props.as || 'p',
})`
	${props => parseProps(config[props.config])}
`;

Text.propTypes = {
	config: oneOf(Object.keys(config)),
};

Text.defaultProps = {
	config: "paragraph",
};

export default Text

export const Title = (props) => <Text as="h1" config="title" {...props} />
Title.displayName = "Title"

export const TitleSecondary = (props) => <Text as="h1" config="titleSecondary" {...props} />
Title.displayName = "TitleSecondary"

export const Subtitle = (props) => <Text as="h2" config="subtitle" {...props}/>
Subtitle.displayName = "Subtitle"

export const Heading = (props) => <Text as="h3" config="heading" {...props}/>
Heading.displayName = "Heading"

export const Paragraph = (props) => <Text as="p" config="paragraph" {...props}/>
Paragraph.displayName = "Paragraph"

export const ParagraphSecondary = (props) => <Text as="p" config="paragraphSecondary" {...props}/>
ParagraphSecondary.displayName = "ParagraphSecondary"

export const Meta = (props) => <Text as="p" config="meta" {...props}/>
Meta.displayName = "Meta"
