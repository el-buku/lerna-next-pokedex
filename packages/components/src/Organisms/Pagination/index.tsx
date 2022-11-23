import {
  gridPageCountSelector,
  gridPageSelector,
  useGridApiContext,
  useGridSelector,
} from "@mui/x-data-grid";
import {
  FlexCenter,
  Pointer,
  FullWidth,
  MarginRight,
  MarginLeft,
} from "../../styles/base";
import { css } from "@emotion/react";
import { theme } from "../../theme";

const PaginationContainer = css`
  ${FlexCenter}
  ${FullWidth}
  background: ${theme.colors.background};
  margin: auto;
  position: fixed;
  bottom: 0;
`;

const ChevronButton = (disabled: boolean) => css`
  ${Pointer}
  &:hover {
    transform: scale(1.1);
  }
  ${disabled &&
  `
        &:hover {
            transform: scale(1);
        }
        visibility:hidden;
        pointer-events:none!important;
    `}
`;

const PaginationFont = css`
  font-size: 40px;
  display: block;
  ${MarginRight(3)}
  ${MarginLeft(3)}
`;

export default function GridPagination() {
  const apiRef = useGridApiContext();
  const page = useGridSelector(apiRef, gridPageSelector);
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <div css={PaginationContainer}>
      <div
        css={ChevronButton(page === 0)}
        onClick={() => apiRef.current.setPage(page - 1)}
      >
        <h3 css={PaginationFont}>{"<"}</h3>
      </div>
      <h3 css={PaginationFont}>{`${page}/${pageCount - 1}`}</h3>
      <div
        css={ChevronButton(page === pageCount)}
        onClick={() => apiRef.current.setPage(page + 1)}
      >
        <h3 css={PaginationFont}>{">"}</h3>
      </div>
    </div>
  );
}
