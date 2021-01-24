import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Container = styled.li`
	line-height: ${Atoms.font.lineHeight.body};
	margin-bottom: ${Atoms.spacing.xsmall};
`;

export default function Li({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Container id={id}>{children}</Container>;
}
