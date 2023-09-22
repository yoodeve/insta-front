import React from "react";
import * as S from "./style";
/** @jsxImportSource @emotion/react */

function Top({ children }) {
  return (
    <div css={S.SLayout}>
      <div css={S.SLogoBox}>
        <div className="logo"></div>
      </div>
      <div>{children}</div>
    </div>
  );
}

export default Top;
