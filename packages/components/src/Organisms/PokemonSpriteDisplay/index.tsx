import Image from "next/image";
// import { useState } from "react";
import { FC, useState } from "react";
import { css } from "@emotion/react";
import { CircleButton, HamburgerButton, PokemonCard } from "../../Atoms";
import { theme } from "../../theme";
import { Relative } from "../../styles/base";

const PokemonSpriteDisplay: FC<{ sprites: string[]; name: string }> = ({
  name,
  sprites,
}) => {
  const [active, setActive] = useState<number>(0);
  return (
    <div
      css={css`
        ${Relative}
        width: 300px;
      `}
    >
      <PokemonCard
        styles={css`
          border-bottom-left-radius: 50px;
          height: 270px;
        `}
        Component={() => (
          <>
            <CircleButton
              borderColor="#e961612b"
              backgroundColor="#ff0000"
              lightColor="#fe98cb"
              size={34}
              containerStyles={css`
                position: absolute;
                top: 190px;
                left: 3px;
                z-index: 100;
              `}
            />
            <CircleButton
              borderColor="#e961612b"
              backgroundColor="#fecb65"
              lightColor="#fefecb"
              size={22}
              containerStyles={css`
                position: absolute;
                top: 244px;
                left: 42%;
                z-index: 100;
              `}
            />
            <CircleButton
              borderColor="#e961612b"
              backgroundColor="#ff0000"
              lightColor="#fe98cb"
              size={22}
              containerStyles={css`
                position: absolute;
                top: 244px;
                left: 56%;
                z-index: 100;
              `}
            />
            <HamburgerButton
              containerStyles={css`
                position: absolute;
                top: 18%;
                left: 5px;
              `}
            />
            <Image
              {...{
                src: sprites[active % sprites.length],
                alt: name,
                width: 224,
                height: 224,
                style: {
                  boxShadow: theme.colors.shadow,
                  background: "#eee",
                  border: "0.5px solid black",
                  marginLeft: 25,
                  marginTop: 2,
                  borderRadius: 15,
                },
              }}
            />
          </>
        )}
        onClick={() => {
          setActive(active + 1);
        }}
      />
    </div>
  );
};

export default PokemonSpriteDisplay;
