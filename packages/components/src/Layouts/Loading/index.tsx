import { css } from "@emotion/react";
import { FullWidth } from "../../styles/base";
import { Spinner } from "../../Atoms";
const LoadingOverlay = () => {
  return (
    <div
      css={css`
        ${FullWidth}
        position:fixed;
        height: 100vh;
        background: #ffffffbf;
        z-index: 1000;
        top: 0;
        padding-top: 45vh;
      `}
    >
      <Spinner />
    </div>
  );
};

export default LoadingOverlay;
