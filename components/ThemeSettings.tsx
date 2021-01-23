import ModeSwitcher from "@/components/ModeSwitcher";
import { Atoms } from "@/system";

import styled from "@emotion/styled";

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	& > :not(:last-child) {
		margin-right: ${Atoms.spacing.medium};
	}
`;

export default function ThemeSettings() {
	return (
		<Wrapper>
			<ModeSwitcher />
		</Wrapper>
	);
}
