import { ReactNode } from "react";
import styled from "@emotion/styled";

type Props = {
	className?: string;
	children: ReactNode;
	gap?: string | number;
	columns?: string | number;
};

const Container = styled.div<Props>`
	display: grid;
	${(props) =>
		props.columns && `grid-template-columns: repeat(${props.columns}, 1fr);`}
	${(props) => props.gap && `grid-gap: ${props.gap};`}
`;

export default function Grid({ className, children, columns, gap }: Props) {
	return (
		<Container className={className} gap={gap} columns={columns}>
			{children}
		</Container>
	);
}
