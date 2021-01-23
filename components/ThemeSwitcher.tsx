import { useCallback, useState } from "react";
import { Atoms } from "@/system";
import { useThemeContext } from "@/system/ThemeProvider";
import Icon from "@/system/Icon";
import styled from "@emotion/styled";
import type { ThemeName } from "@/system/ThemeProvider";
import type { IconName } from "@/system/Icon";

type SeasonIconMapType = {
	[K in ThemeName]: IconName;
};

interface ThemeIconProps {
	name: ThemeName;
}

const seasonIconMap: SeasonIconMapType = {
	spring: "flower",
	summer: "sun",
	autumn: "leaf",
	winter: "snowflake",
};

const Wrapper = styled.div`
	display: flex;
	& > *:not(:last-child) {
		margin-right: ${Atoms.spacing.medium};
	}
`;

const ThemeIcon = ({ name }: ThemeIconProps) => {
	const { theme, toggleTheme } = useThemeContext();
	const [isHovered, setIsHovered] = useState(false);

	const handleOnClick = useCallback(() => {
		toggleTheme(name);
	}, [toggleTheme]);

	const onMouseOver = useCallback(() => {
		setIsHovered(true);
	}, [isHovered]);

	const onMouseOut = useCallback(() => {
		setIsHovered(false);
	}, [isHovered]);

	const iconName: IconName = seasonIconMap[name];

	return (
		<Icon
			name={iconName}
			onClick={handleOnClick}
			size={24}
			color="var(--text-color)"
			opacity={theme == name ? 1 : 0.3}
			onMouseOver={onMouseOver}
			onMouseOut={onMouseOut}
			style={{ cursor: "pointer" }}
		/>
	);
};

export default function ThemeSwitcher() {
	return (
		<Wrapper>
			<ThemeIcon name="spring" />
			<ThemeIcon name="summer" />
			<ThemeIcon name="autumn" />
			<ThemeIcon name="winter" />
		</Wrapper>
	);
}
