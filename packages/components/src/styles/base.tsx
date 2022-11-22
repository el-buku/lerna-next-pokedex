import { css } from "@emotion/react";
import { FONT_H1, FONT_H3 } from "./fonts";

export const Flex = css`
  display: flex;
  flex-wrap: wrap;
`;

export const AlignCenter = css`
  align-items: center;
`;

export const TextCenter = css`
  text-align: center;
`;

export const JustifyCenter = css`
  justify-content: center;
`;

export const SpaceBetween = css`
  justify-content: space-between;
`;

export const SpaceAround = css`
  justify-content: space-around;
`;

export const FlexCenter = css([Flex, AlignCenter, JustifyCenter]);

export const Font1 = css`
  font-family: "${FONT_H1}", sans-serif;
`;

export const Font2 = css`
  font-family: "${FONT_H3}", sans-serif;
`;

export const TextBold = css`
  font-weight: bold;
`;

export const AbsoluteCenter = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Pointer = css`
  cursor: pointer;
`;

export const MarginAuto = css`
  margin: auto;
`;

export const MarginTop = (px: number) => css`
  margin-top: ${px}px;
`;

export const MarginBottom = (px: number) => css`
  margin-bottom: ${px}px;
`;

export const MarginLeft = (px: number) => css`
  margin-left: ${px}px;
`;

export const MarginRight = (px: number) => css`
  margin-right: ${px}px;
`;

export const MarginX = (px: number) => css`
  ${MarginLeft(px)};
  ${MarginRight(px)};
`;

export const MarginY = (px: number) => css`
  ${MarginTop(px)};
  ${MarginBottom(px)};
`;

export const MarginAll = (px: number) => css`
  ${MarginX(px)};
  ${MarginY(px)};
`;

export const PaddingTop = (px: number) => css`
  padding-top: ${px}px;
`;

export const PaddingBottom = (px: number) => css`
  padding-bottom: ${px}px;
`;

export const PaddingLeft = (px: number) => css`
  padding-left: ${px}px;
`;

export const PaddingRight = (px: number) => css`
  padding-right: ${px}px;
`;

export const PaddingX = (px: number) => css`
  ${PaddingLeft(px)};
  ${PaddingRight(px)};
`;

export const PaddingY = (px: number) => css`
  ${PaddingTop(px)};
  ${PaddingBottom(px)};
`;

export const PaddingAll = (px: number) => css`
  ${PaddingX(px)};
  ${PaddingY(px)};
`;

export const FullHeight = css`
  height: 100%;
`;

export const FullWidth = css`
  width: 100%;
`;

export const Fit = css`
  ${FullHeight};
  ${FullWidth}
`;

export const PokemonGrid = css`
  ${Flex};
  ${JustifyCenter};
  > div {
    flex: 1 1 175px;
  }
`;
