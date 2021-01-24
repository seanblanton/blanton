import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Wrapper = styled.blockquote`
    position: relative;
    overflow: hidden;
    border-radius: ${Atoms.borderRadius.small};
    padding: ${Atoms.spacing.medium};
    line-height: ${Atoms.font.lineHeight.body};
    margin-top: ${Atoms.spacing.large};
    margin-bottom: ${Atoms.spacing.large};
    background-blend-mode: difference;
    & > :last-child {
      margin-bottom: unset !important;
    }
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      bottom: 0;
      right: 0;
      background: var(--text-color);
      opacity: 0.05;
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
