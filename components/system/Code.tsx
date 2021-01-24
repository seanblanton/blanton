import Highlight, { defaultProps } from "prism-react-renderer";
import Atoms from "@/system/atoms";
import { default as palenight } from "prism-react-renderer/themes/palenight";
import styled from "@emotion/styled";

const Wrapper = styled.pre`
  position: relative;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background-color: var(--accent-color);
    opacity: var(--accent-opacity);
    z-index: -1;
  }
`;

export default function Code(props: any) {
  const { children, className } = props;
  const language = className?.replace(/language-/, "");

  return (
    <Highlight
      {...defaultProps}
      theme={palenight}
      code={children}
      language={language}
    >
      {({
        className,
        style: { backgroundColor, ...otherStyles },
        tokens,
        getLineProps,
        getTokenProps,
      }) => (
        <Wrapper
          className={className}
          style={{
            backgroundColor: `transparent`,
            ...otherStyles,
            borderRadius: Atoms.borderRadius.medium,
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
        </Wrapper>
      )}
    </Highlight>
  );
}
