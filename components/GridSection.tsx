import { ReactNode } from "react";
import { H2, Grid } from "@/system";

type Props = {
  children: ReactNode;
  title: string;
};

const GridSection = ({ children, title }: Props) => (
  <Grid>
    <H2> {title}</H2>
    {children}
  </Grid>
);

export default GridSection;
