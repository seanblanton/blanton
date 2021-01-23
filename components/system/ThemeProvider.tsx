import React, { ReactNode, useContext, useEffect } from "react";
import useLocalStorage from "@/utils/useLocalStorage";
export type ThemeName = "spring" | "summer" | "autumn" | "winter";

type Mode = "light" | "dark";

interface ThemeProviderType {
	theme: ThemeName;
	mode: Mode;
	toggleTheme: (name: ThemeName) => void;
	toggleMode: () => void;
}

const DEFAULT_MODE = "light";
const DEFAULT_THEME = "spring";

export const ThemeContext = React.createContext({} as ThemeProviderType);

const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [mode, setMode] = useLocalStorage("mode", DEFAULT_MODE);
	const [theme, setTheme] = useLocalStorage("theme", DEFAULT_THEME);

	const toggleMode = () => {
		mode === "light" ? setMode("dark") : setMode("light");
	};

	function toggleTheme<T extends ThemeName>(name: T) {
		setTheme(name);
	}

	const updateTheme = () => {
		const currentTheme = `${theme}-${mode}`;
		document.documentElement.className = currentTheme;
	};

	useEffect(() => {
		updateTheme();
	});

	return (
		<ThemeContext.Provider value={{ theme, mode, toggleTheme, toggleMode }}>
			{children}
		</ThemeContext.Provider>
	);
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
