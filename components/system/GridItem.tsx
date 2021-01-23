import { ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
	children: ReactNode;
	start?: number;
	end?: number;
	span?: number[] | number | string;
	column?: string;
};

const Container = styled.section<Props>`
  --grid-column-start: ${(props) => props.start ?? `auto`};
  --grid-column-end: ${(props) =>
		props.span ? `span ${props.span}` : props.end};
  grid-column-start: var(--grid-column-start);
  grid-column-end: var(--grid-column-end);


  }
`;

export default function GridItem({ children, start, end, span }: Props) {
	return (
		<Container start={start} end={end} span={span}>
			{children}
		</Container>
	);
}
