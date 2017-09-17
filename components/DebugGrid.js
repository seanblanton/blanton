import styled from "styled-components";
import { string, number, bool, oneOfType } from "prop-types";
import { px, alpha } from "./../utils";

const gradient = (color, a) => {
	return `linear-gradient(0,     ${alpha(color, a)} 1px, transparent 1px),
          linear-gradient(90deg, ${alpha(color, a)} 1px, transparent 1px);`;
};

const DebugGrid = styled.div`
	position: absolute;
	top: 0;
	margin: 0;
	padding: 0;
	width: 100%;
	height: 100%;
	mix-blend-mode: difference;
	background-size: ${props => px(props.size)} ${props => px(props.size)};
	background-image: ${props => props.disabled ? "transparent" : gradient(props.color, 0.25)};
	${this} * {
		outline: ${props => props.disabled ? "" : "1px solid " + props.color + "!important" };
	}
`;

DebugGrid.displayName = "DebugGrid";

DebugGrid.propTypes = {
	size: oneOfType([number, bool]),
	color: string,
	disabled: bool,
	outline: bool
};

DebugGrid.defaultProps = {
	size: 8,
	color: "magenta",
	disabled: false,
	outline: false
};

export default DebugGrid;
