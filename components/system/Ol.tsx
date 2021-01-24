import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Container = styled.ol`
	margin-bottom: ${Atoms.spacing.large};
`;

export default function Ol({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Container id={id}>{children}</Container>;
}
