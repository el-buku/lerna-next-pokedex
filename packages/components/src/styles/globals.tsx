import React from "react";
import { css, Global } from "@emotion/react";
import { FONT_H1, FONT_H3 } from "./fonts";

export function GlobalStyles() {
  //   const theme = useTheme();

  return (
    <Global
      styles={css`
        html,
        body {
          overflow: hidden;
          font-family: "${FONT_H3}";
        }

        * {
          padding: 0;
          margin: 0;
          box-sizing: border-box;
        }

        *::before,
        *::after {
          display: block;
        }

        main {
          height: 100vh;
          overflow-y: auto;
        }

        h1 {
          font-size: 3rem;
          font-family: "${FONT_H1}", sans-serif;
        }

        h2 {
          font-size: 2rem;
          font-family: "${FONT_H3}", sans-serif;
        }

        h3 {
          font-size: 1.1rem;
          font-family: "${FONT_H3}", sans-serif;
        }
      `}
    />
  );
}
