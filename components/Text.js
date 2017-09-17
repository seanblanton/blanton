
import React from 'react'
import styled from "styled-components";
import { oneOf } from "prop-types";
import { colors, fontSizes, spacing} from "./../config";
import { px, parseProps } from "./../util/";
import hoc from "./../util/hoc";


const config = {
	"title": {
		fontSize: fontSizes[2],
		lineHeight: px(spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0,
	},
	"subtitle": {
		fontSize: fontSizes[4],
		lineHeight: px(spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0,
		color: colors.gray2,
	},
	"heading": {
		fontSize: fontSizes[3],
		lineHeight: px(spacing[5]),
		fontWeight: 400,
		padding: 0,
		margin: 0,
	},
	"paragraph": {
		fontSize: px(fontSizes[4]),
		lineHeight: px(spacing[4]),
		padding: 0,
		margin: 0,
	},
	"paragraphSecondary": {
		fontSize: px(fontSizes[4]),
		lineHeight: px(spacing[4]),
		padding: 0,
		margin: 0,
		color: colors.gray2,
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

export const Title = (props) => <Text {...props} as="h1" config="title" />
Title.displayName = "Title"

export const Subtitle = (props) => <Text {...props} as="h2" config="subtitle" />
Subtitle.displayName = "Subtitle"

export const Heading = (props) => <Text {...props} as="h3" config="heading" />
Heading.displayName = "Heading"

export const Paragraph = (props) => <Text {...props} as="p" config="paragraph" />
Paragraph.displayName = "Paragraph"

export const ParagraphSecondary = (props) => <Text {...props} as="p" config="paragraphSecondary" />
ParagraphSecondary.displayName = "ParagraphSecondary"
