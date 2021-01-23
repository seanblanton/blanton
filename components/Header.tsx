import { ReactNode } from "react";
import { Atoms, Grid, GridItem, H1 } from "@/system";
import styled from "@emotion/styled";

const Section = styled.header`
	padding-top: ${Atoms.spacing.xxlarge};
	margin-top: ${Atoms.spacing.xlarge};
`;

export default function Header({ children }: { children: ReactNode }) {
	return (
		<Grid columns={6} gap={Atoms.grid.gap}>
			<GridItem span={5}>
				<Section>
					<H1>{children}</H1>
				</Section>
			</GridItem>
		</Grid>
	);
}
