import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Container = styled.h3`
	font-size: ${Atoms.font.size.medium};
	font-weight: ${Atoms.font.weight.bold};
	line-height: ${Atoms.font.lineHeight.body};
	margin-bottom: ${Atoms.spacing.xxsmall};
`;

export default function H3({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Container id={id}>{children}</Container>;
}
