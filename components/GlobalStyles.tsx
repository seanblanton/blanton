import { Atoms } from "@/system";
import { css, Global } from "@emotion/react";
import React from "react";

const GlobalStyles = () => {
	return (
		<Global
			styles={css`
				:root {
					--background-color: ${Atoms.color.spring.background.light};
					--text-color: ${Atoms.color.spring.text.primary.light};
					--font-size: ${Atoms.font.size.medium};
					--font-family: ${Atoms.font.family.sans};
					--grid-template-columns: 6;
					--grid-column-gap: calc(var(--unit) * 4);
					--unit: calc(var(--font-size) / 2);
					--grid-section: 6;
				}

				@media screen and (min-width: ${Atoms.breakpoints.medium}) {
					:root {
						--grid-section: 3;
					}
				}

				@media screen and (min-width: ${Atoms.breakpoints.large}) {
					:root {
						--grid-section: 2;
					}
				}
				.spring-light {
					--background-color: ${Atoms.color.spring.background.light};
					--text-color: ${Atoms.color.spring.text.primary.light};
				}

				.spring-dark {
					--background-color: ${Atoms.color.spring.background.dark};
					--text-color: ${Atoms.color.spring.text.primary.dark};
				}

				.summer-light {
					--background-color: ${Atoms.color.summer.background.light};
					--text-color: ${Atoms.color.summer.text.primary.light};
				}

				.summer-dark {
					--background-color: ${Atoms.color.summer.background.dark};
					--text-color: ${Atoms.color.summer.text.primary.dark};
				}

				.autumn-light {
					--background-color: ${Atoms.color.autumn.background.light};
					--text-color: ${Atoms.color.autumn.text.primary.light};
				}

				.autumn-dark {
					--background-color: ${Atoms.color.autumn.background.dark};
					--text-color: ${Atoms.color.autumn.text.primary.dark};
				}

				.winter-light {
					--background-color: ${Atoms.color.winter.background.light};
					--text-color: ${Atoms.color.winter.text.primary.light};
				}

				.winter-dark {
					--background-color: ${Atoms.color.winter.background.dark};
					--text-color: ${Atoms.color.winter.text.primary.dark};
				}

				* {
					box-sizing: border-box;
					margin: 0;
					padding: 0;
				}
				html {
					background-color: var(--background-color);
					color: var(--text-color);
					flex: 1;
					font-family: var(--font-family);
					font-size: 16px;
					line-height: ${Atoms.unit};
					transition: 500ms all ease-out;
					height: 100%;
				}
				,
        body: {
					min-height: 100%;
					font-size: var(--font-size);
				}
				ul,
				ol {
					margin-bottom: ${Atoms.spacing.medium};
					padding-left: ${Atoms.spacing.medium};
				}
				a {
					color: inherit;
					text-decoration-line: none;
					text-decoration-color: var(--hover-color) !important;
				}
				a:hover,
				a:focus {
					color: var(--hover-color);
				}
				,
				h1,
				h2,
				h3,
				h4 {
					font-weight: unset;
				}
			`}
		/>
	);
};

export default GlobalStyles;
