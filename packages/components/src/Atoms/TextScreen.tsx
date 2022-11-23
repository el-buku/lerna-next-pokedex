import { FC } from "react";
import { theme } from "../theme";
import { css, SerializedStyles } from "@emotion/react";

const screenBg = "#39ab77";

const ScreenStyles = css`
  background: ${screenBg};
  box-shadow: ${theme.colors.shadow};
  border: 1px solid black;
  border-radius: 10px;
  color: black;
  padding: 0.5rem;
  padding-top: 0.8rem;
  text-align: left;
`;
const TextScreen: FC<{
  text: string | JSX.Element;
  containerStyles?: SerializedStyles;
  textStyles?: SerializedStyles;
}> = ({ text, containerStyles, textStyles }) => (
  <div
    css={css`
      ${ScreenStyles}${containerStyles}
    `}
  >
    <h1 css={textStyles}>{text}</h1>
  </div>
);
export default TextScreen;
