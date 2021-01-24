import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Container = styled.pre`
	font-family: ${Atoms.font.family.mono};
	line-height: ${Atoms.font.lineHeight.body};
	white-space: pre;
	margin-bottom: ${Atoms.spacing.medium};

	-moz-tab-size: 4;
	-o-tab-size: 4;
	tab-size: 4;

	-webkit-hyphens: none;
	-moz-hyphens: none;
	-ms-hyphens: none;
	hyphens: none;
`;

export default function Pre({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Container id={id}>{children}</Container>;
}
