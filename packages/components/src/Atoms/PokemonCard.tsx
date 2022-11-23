import { css } from "@emotion/react";
import {
  MarginAll,
  PaddingBottom,
  PaddingTop,
  Pointer,
  TextCenter,
} from "../styles/base";
import { theme } from "../theme";
import { FC } from "react";

const CardStyles = css`
  ${TextCenter}
  ${Pointer}
  ${PaddingTop(15)}
  ${PaddingBottom(15)}
  ${MarginAll(7)}
  background: ${theme.colors.background};
  border: 1.5px solid ${theme.colors.inverse};
  box-shadow: ${theme.colors.shadow};
  border-bottom-left-radius: 21px;
  height: 175px;
  position: relative;
  &:hover {
    transform: scale(1.07);
    border-color: #e73827;
  }
`;

const PokemonCard: FC<{
  Component: () => JSX.Element;
  onClick: () => void;
}> = ({ Component, onClick }) => {
  return (
    <div css={CardStyles} onClick={onClick}>
      {Component()}
    </div>
  );
};

export default PokemonCard;
