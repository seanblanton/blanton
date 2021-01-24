import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Wrapper = styled.h2`
	font-size: ${Atoms.font.size.large};
	font-weight: ${Atoms.font.weight.semi};
	line-height: ${Atoms.font.lineHeight.header};
	padding-top: ${Atoms.spacing.medium};
	margin-bottom: ${Atoms.spacing.large};
`;

export default function H2({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Wrapper id={id}>{children}</Wrapper>;
}
