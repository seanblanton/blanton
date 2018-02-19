import styled from "styled-components";
import { spacing } from './../config';
import Box from "./Box";

const Container = styled(Box).attrs({
	px: spacing[5],
	py: spacing[7],
	my: 0,
	mx: 'auto'
})`
		height: 100%;
		max-width: 672px;
		`

export default Container;
