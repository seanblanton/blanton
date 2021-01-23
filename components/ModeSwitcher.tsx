import { useThemeContext } from "@/system/ThemeProvider";
import Icon from "@/system/Icon";

export default function ThemeSwitcher() {
	const { mode, toggleMode } = useThemeContext();
	return (
		<Icon
			name="toggle"
			onClick={toggleMode}
			size={24}
			rotation={mode === "dark" ? 180 : 0}
			color="var(--text-color)"
			style={{ cursor: "pointer" }}
		/>
	);
}
