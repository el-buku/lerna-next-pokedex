import { css } from "@emotion/react";
import {
  MarginAll,
  PaddingBottom,
  PaddingTop,
  Pointer,
  TextCenter,
} from "../styles/base";
import { theme } from "../theme/";
import { FC } from "react";

const CardStyles = css`
  ${TextCenter}
  ${Pointer}
  ${PaddingTop(15)}
  ${PaddingBottom(15)}
  ${MarginAll(7)}
  border: 1.5px solid ${theme.colors.inverse};
  box-shadow: ${theme.colors.shadow};
  border-radius: 7px;
  &:hover {
    transform: scale(1.07);
    border-color: #e73827;
  }
`;

const PokemonCard: FC<{ name: string; onClick: () => void }> = ({
  name,
  onClick,
}) => {
  return (
    <div css={CardStyles} onClick={onClick}>
      <h3>{name}</h3>
    </div>
  );
};

export default PokemonCard;
