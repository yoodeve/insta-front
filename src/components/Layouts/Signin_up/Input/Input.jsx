import React from "react";
import * as S from "./style";
/** @jsxImportSource @emotion/react */

function Input({ placeholder, name, onChange }) {
  return (
    <div css={S.SLayout}>
      <label css={S.SInput}>
        <span>{placeholder}</span>
        <input name={name} type="text" onChange={onChange} />
      </label>
      <div css={S.SStateBox}></div>
    </div>
  );
}

export default Input;
