import React from "react";
import * as S from "./style";
/** @jsxImportSource @emotion/react */

function SigninupLayout({ children }) {
  return (
    <div css={S.SLayout}>
      <div css={S.SContainer}>{children}</div>
    </div>
  );
}

export default SigninupLayout;
