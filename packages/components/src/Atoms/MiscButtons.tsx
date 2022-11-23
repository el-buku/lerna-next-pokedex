import { FC } from "react";
import { css, SerializedStyles } from "@emotion/react";
import { theme } from "../theme";
import { PaddingBottom, PaddingTop } from "../styles/base";

const LineStyle = (color: string, size: number) => css`
  background: ${color};
  width: ${size}px;
  height: ${size / 10}px;
  margin-top: ${size / 10}px;
  box-shadow: ${theme.colors.shadow};
  borer-radius: 10px;
`;
export const LineButton: FC<{
  color: string;
  size: number;
  containerStyles?: SerializedStyles;
}> = ({ color, size, containerStyles }) => (
  <div
    css={css`
  ${LineStyle(color, size)}
  ${containerStyles}}
  `}
  />
);

export const HamburgerButton: FC<{ containerStyles?: SerializedStyles }> = ({
  containerStyles,
}) => (
  <div
    css={css`
      display: flex;
      flex-direction: column;
      ${containerStyles}
    `}
  >
    <LineButton color="black" size={30} />
    <LineButton color="black" size={30} />
    <LineButton color="black" size={30} />
    <LineButton color="black" size={30} />
  </div>
);

const CrossButtonLine = (color: string, size: number) => css`
  background: ${color};
  width: ${size}px;
  height: ${size / 5}px;
  box-shadow: ${theme.colors.shadow};
  border-radius: 10px;
  position: absolute;
`;
const crossBtnColor = "grey";
const crossBtnSize = 150;
export const CrossButton: FC<{ containerStyles?: SerializedStyles }> = ({
  containerStyles,
}) => (
  <div
    css={css`
      position: relative;
      width: ${crossBtnSize}px;
      ${PaddingTop((crossBtnSize * 2) / 5)}
      ${PaddingBottom((crossBtnSize * 3) / 5)}
      ${containerStyles}
    `}
  >
    <div
      css={css`
        ${CrossButtonLine(crossBtnColor, crossBtnSize)}
      `}
    />
    <div
      css={css`
        ${CrossButtonLine(crossBtnColor, crossBtnSize)}
        transform: rotate(90deg);
      `}
    />
  </div>
);
