import { FC, useEffect, useState } from "react";
import { css } from "@emotion/react";
import { capitalize, Pokemon } from "pokedex-utils";
import { theme } from "../../theme";
import {
  TextCenter,
  FullHeight,
  FullWidth,
  AbsoluteCenter,
  Flex,
  PaddingY,
  PaddingX,
  MarginX,
} from "../../styles/base";
import {
  CircleButton,
  CircleButtonsOverlay,
  CornerPolyLine,
  CrossButton,
  TextScreen,
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

const SideContainer = css`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const RightSpan = css`
  text-align: right;
  margin-left: auto;
`;

const PokemonDetails: FC<{ pokemon: Pokemon }> = ({ pokemon }) => {
  const sprites = Object.values(pokemon.sprites).filter(
    (e) => !!e && typeof e === "string"
  );
  sprites.reverse();
  const LeftSideDetails = () => (
    <div
      css={`
        ${SideContainer}${MarginX(50)}
      `}
    >
      <PokemonSpriteDisplay name={pokemon.name} sprites={sprites} />
      <div
        css={css`
          display: flex;
          align-items: center;
          margin-top: 2rem;
          margin-left: -1.5rem;
        `}
      >
        <div
          css={css`
            margin: 1rem;
            margin-top: -3.5rem;
          `}
        >
          <TextScreen text={`#${pokemon.id}`} />
        </div>
        <div>
          <CrossButton />
          <div
            css={css`
              display: flex;
              width: 150px;
              justify-content: space-evenly;
              align-items: center;
              margin-top: 45px;
              margin-left: -4.5rem;
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
              backgroundColor="#32cb65"
              lightColor="#98fe00"
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
    </div>
  );

  const RightSideDetails = () => (
    <div
      css={css`
        ${SideContainer}${PaddingY(8)}${PaddingX(10)}${MarginX(50)}
        justify-content: space-between;
      `}
    >
      <TextScreen
        text={
          <>
            <p css={Flex}>
              height <span css={RightSpan}> {pokemon.height / 10}m</span>
            </p>
            <p css={Flex}>
              weight <span css={RightSpan}> {pokemon.weight / 10}kg</span>
            </p>
          </>
        }
        textStyles={css`
          font-size: 1.2rem;
        `}
      />
      <TextScreen
        text={
          <>
            {pokemon.stats.map((stat) => {
              const statName = stat.stat.name;
              const parsedStatName = statName
                .split("-")
                .reverse()
                .map((part, index) => part.slice(0, index === 0 ? 2 : 1))
                .join("-");
              return (
                <p css={Flex} key={parsedStatName}>
                  {parsedStatName}
                  <span css={RightSpan}>{stat.base_stat}</span>
                </p>
              );
            })}
          </>
        }
        textStyles={css`
          font-size: 1.2rem;
        `}
      />
      <TextScreen
        text={pokemon.types[0].type.name}
        textStyles={css`
          font-size: 1.2rem;
        `}
      />
    </div>
  );
  return (
    <>
      <h1 css={MobileShift} style={{ fontSize: "4em" }}>
        {capitalize(pokemon.name || "")}
      </h1>
      <div
        css={css`
          display: flex;
          justify-content: center;
          ${AbsoluteCenter}
        `}
      >
        <LeftSideDetails />
        <RightSideDetails />
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

  return (
    <div css={OverlayStyles}>
      <CircleButtonsOverlay />
      <CornerPolyLine />
      {(isLoading || (!data && !error)) && <LoadingLayout />}
      {error && <ErrorLayout />}
      {pokemon ? <PokemonDetails {...{ pokemon }} /> : null}
    </div>
  );
};

export default PokemonDetailsOverlay;
