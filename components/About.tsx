import * as React from "react";
import { GridSection } from "@/components";
import { Link, P } from "@/system";

const About = () => (
  <GridSection title='About'>
    <P>
      Hello there. I'm a Product Designer living in Seattle, Washington and
      working on elevating product quality on{" "}
      <Link href='http://www.facebook.com/business'>
        Facebook Ads & Business Products
      </Link>
      .
      <br />
      <br />
      Previously, I was leading a design team at Facebook building a React-based
      proprietary design tool that helped scale our design systems across the
      company.
      <br />
      <br />I spend my time thinking about scaling products, teams, systems, and
      people to their full potential.
    </P>
  </GridSection>
);

export default About;
