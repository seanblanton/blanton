import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Wrapper = styled.h1`
	font-size: ${Atoms.font.size.xlarge};
	font-weight: ${Atoms.font.weight.bold};
	line-height: ${Atoms.font.lineHeight.header};
	margin-bottom: ${Atoms.spacing.xxlarge};
`;

export default function H1({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Wrapper id={id}>{children}</Wrapper>;
}
