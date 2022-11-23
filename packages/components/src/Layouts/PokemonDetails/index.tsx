import { FC } from "react";
import { css } from "@emotion/react";
import { capitalize, Pokemon } from "pokedex-utils";
import { theme } from "../../theme";
import { TextCenter, FullHeight, FullWidth } from "../../styles/base";
import { CircleButtonsOverlay, CornerPolyLine } from "../../Atoms";

const OverlayStyles = css`
  ${FullHeight}
  ${FullWidth}
  ${TextCenter}
  background: ${theme.colors.header};
  color: ${theme.colors.background};
`;

const PokemonDetailsOverlay: FC<{ pokemon: Pokemon }> = ({
  pokemon: { name },
}) => (
  <div css={OverlayStyles}>
    <CircleButtonsOverlay />
    <CornerPolyLine />
    <h1 style={{ fontSize: "4em" }}>{capitalize(name)}</h1>
  </div>
);

export default PokemonDetailsOverlay;
