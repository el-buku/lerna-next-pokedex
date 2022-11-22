import { css } from "@emotion/react";
import { theme } from "../theme";
import { PaddingTop, PaddingBottom, TextCenter } from "../styles/base";
import { CircleButtonsOverlay, CornerPolyLine } from "../Atoms";

const HeaderStyles = css`
  ${TextCenter}
  position: sticky;
  top: 0;
  z-index: 50;
  background: ${theme.colors.header};
  color: ${theme.colors.background};
  ${PaddingTop(120)}
  ${PaddingBottom(80)}
`;

const Header = () => (
  <div css={HeaderStyles}>
    <CircleButtonsOverlay />
    <CornerPolyLine />
    <h1 style={{ fontSize: "1.7em" }}>Lerna Redux SSR </h1>
    <h1 style={{ fontSize: "4em" }}>Pokedex</h1>
  </div>
);

export default Header;
