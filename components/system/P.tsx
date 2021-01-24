import Atoms from "@/system/atoms";
import styled from "@emotion/styled";

const Wrapper = styled.div`
  font-size: ${Atoms.font.size.medium};
  font-weight: ${Atoms.font.weight.normal};
  line-height: ${Atoms.font.lineHeight.body};
  margin-bottom: ${Atoms.spacing.large};
  & a {
    font-weight: ${Atoms.font.weight.bold};
  }
`;

export default function P({
  children,
  id,
}: {
  children: React.ReactNode;
  id?: string;
}) {
  return <Wrapper id={id}>{children}</Wrapper>;
}
