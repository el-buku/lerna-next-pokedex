import { FC } from "react";
import { css, SerializedStyles } from "@emotion/react";
import {
  AbsoluteCenter,
  Flex,
  MarginLeft,
  MarginRight,
  Pointer,
  Relative,
} from "../styles/base";
import { useRouter } from "next/router";

const CircleContainer = (color: string, size: number) => css`
  ${AbsoluteCenter}
  border-radius: 50%;
  height: ${size}px;
  width: ${size}px;
  background: ${color};
`;

export const CircleButton: FC<{
  borderColor: string;
  backgroundColor: string;
  lightColor: string;
  size: number;
  containerStyles?: SerializedStyles;
}> = ({ borderColor, backgroundColor, lightColor, size, containerStyles }) => {
  return (
    <div
      css={css`
        ${Relative}
        height:${size}px;
        width: ${size}px;
        ${containerStyles}
      `}
    >
      <div css={CircleContainer(borderColor, size)}>
        <div css={CircleContainer(backgroundColor, (size * 80) / 100)} />
        <div
          css={css`
            ${CircleContainer(lightColor, (size * 18) / 100)}
            top:37%;
            left: 36%;
          `}
        />
      </div>
    </div>
  );
};

export default function CirclesOverlay() {
  const router = useRouter();
  return (
    <div
      css={css`
        ${Pointer}
        display: flex;
        position: absolute;
        top: 10px;
        left: 15px;
        z-index: 2000;
      `}
      onClick={() => router.push("/")}
    >
      <CircleButton
        borderColor="#dce1e75c"
        backgroundColor="#3298cb"
        lightColor="#85bdfe"
        size={100}
      />
      <div
        css={css`
          ${Flex}
          ${MarginLeft(40)}
        `}
      >
        <div
          css={css`
            ${MarginRight(10)}
          `}
        >
          <CircleButton
            borderColor="#ffffff63"
            backgroundColor="#ff0000"
            lightColor="#fe98cb"
            size={50}
          />
        </div>
        <div
          css={css`
            ${MarginRight(10)}
          `}
        >
          <CircleButton
            borderColor="#ffffff63"
            backgroundColor="#fecb65"
            lightColor="#fefecb"
            size={50}
          />
        </div>
        <div
          css={css`
            ${MarginRight(10)}
          `}
        >
          <CircleButton
            borderColor="#ffffff63"
            backgroundColor="#32cb65"
            lightColor="#98fe00"
            size={50}
          />
        </div>
      </div>
    </div>
  );
}
