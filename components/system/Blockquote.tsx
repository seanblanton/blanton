import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Wrapper = styled.blockquote`
    background: rgba(255,255,255,0.35);
    border-radius: ${Atoms.borderRadius.small};
    padding: ${Atoms.spacing.medium};
    line-height: ${Atoms.font.lineHeight.body};
    margin-top: ${Atoms.spacing.large};
    margin-bottom: ${Atoms.spacing.large};
    background-blend-mode: difference;
    & > :last-child {
      margin-bottom: unset !important;
    }
    }
`;

export default function Blockquote({
	children,
	id,
}: {
	children: React.ReactNode;
	id?: string;
}) {
	return <Wrapper id={id}>{children}</Wrapper>;
}
