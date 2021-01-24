import { Atoms, P, Link } from "@/system";
import styled from "@emotion/styled";
import siteData from "../data/site.js";

const Section = styled.footer`
  padding: ${Atoms.spacing.large} 0;
`;

export default function Footer() {
  return (
    <Section>
      <P>
        Designed and built by me. Find me on{" "}
        <Link href={siteData.twitter}>Twitter</Link> or{" "}
        <Link href={siteData.github}>Github</Link>.
      </P>
    </Section>
  );
}
