import Highlight, { defaultProps } from "prism-react-renderer";
import Atoms from "@/system/atoms";
import paleNight from "prism-react-renderer/themes/paleNight";

export default function Code(props: any) {
	const { children, className } = props;
	const language = className?.replace(/language-/, "");

	return (
		<Highlight
			{...defaultProps}
			theme={paleNight}
			code={children}
			language={language}
		>
			{({ className, style, tokens, getLineProps, getTokenProps }) => (
				<pre
					className={className}
					style={{
						...style,
						borderRadius: 16,
						padding: Atoms.spacing.medium,
					}}
				>
					{tokens.map((line, i) => (
						<div key={i} {...getLineProps({ line, key: i })}>
							{line.map((token, key) => (
								<span key={key} {...getTokenProps({ token, key })} />
							))}
						</div>
					))}
				</pre>
			)}
		</Highlight>
	);
}
