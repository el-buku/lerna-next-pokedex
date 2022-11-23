import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { capitalize, Pokemon } from "pokedex-utils";
import { theme } from "../../theme";
import { TextCenter, FullHeight, FullWidth } from "../../styles/base";
import {
  CircleButton,
  CircleButtonsOverlay,
  CornerPolyLine,
  CrossButton,
} from "../../Atoms";
import { LoadingLayout } from "../";
import { PokemonSpriteDisplay } from "../../Organisms";

const OverlayStyles = css`
  ${FullHeight}
  ${FullWidth}
  ${TextCenter}
  background: ${theme.colors.header};
  color: ${theme.colors.background};
`;

const MobileShift = css`
  @media screen and (max-width: 1000px) {
    & {
      text-align: right;
      padding-right: 0.2em;
    }
  }
`;

const ErrorLayout = () => (
  <>
    <h1 css={MobileShift} style={{ fontSize: "4em" }}>
      {"Error"}
    </h1>
    <h1 style={{ fontSize: "4em", marginTop: "15vh" }}>{"X x"}</h1>
    <h1 style={{ fontSize: "4em", marginTop: "-47px" }}>{"_"}</h1>
  </>
);

const PokemonDetails: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const sprites = Object.values(pokemon.sprites).filter(
    (e) => !!e && typeof e === "string"
  );
  sprites.reverse();
  return (
    <>
      <h1 css={MobileShift} style={{ fontSize: "4em" }}>
        {capitalize(pokemon.name || "")}
      </h1>
      <div
        css={css`
          display: flex;
          flex-direction: column;
          width: 300px;
        `}
      >
        <PokemonSpriteDisplay name={pokemon.name} sprites={sprites} />
        <div
          css={css`
            display: flex;
            flex-direction: column;
          `}
        >
          <CrossButton />
          <div
            css={css`
              display: flex;
              width: 150px;
              justify-content: space-evenly;
              align-items: center;
              margin-top: 45px;
            `}
          >
            <CircleButton
              borderColor="#ffffff63"
              backgroundColor="#ff0000"
              lightColor="#fe98cb"
              size={30}
            />
            <CircleButton
              borderColor="#ffffff63"
              backgroundColor="#ff0000"
              lightColor="#fe98cb"
              size={16}
            />
            <CircleButton
              borderColor="#ffffff63"
              backgroundColor="#ff0000"
              lightColor="#fe98cb"
              size={16}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const PokemonDetailsOverlay: FC<{
  data?: Pokemon;
  error?: boolean;
  isLoading: boolean;
}> = ({ data, isLoading, error }) => {
  const [pokemon, setPokemon] = useState<Pokemon>();
  useEffect(() => data && setPokemon(data), [data]);
  console.log(error, isLoading, !!data);
  return (
    <div css={OverlayStyles}>
      <CircleButtonsOverlay />
      <CornerPolyLine />
      {(isLoading || !data) && <LoadingLayout />}
      {error && <ErrorLayout />}
      {pokemon ? <PokemonDetails {...{ pokemon }} /> : null}
    </div>
  );
};

export default PokemonDetailsOverlay;
