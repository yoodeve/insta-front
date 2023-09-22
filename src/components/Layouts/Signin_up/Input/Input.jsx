import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
/** @jsxImportSource @emotion/react */

function Input({ placeholder, name, type, changeAccount }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    changeAccount(e.target.name, e.target.value);
  };

  useEffect(() => {
    setIsEmpty(!inputVal);
  }, [inputVal]);

  return (
    <div css={S.SLayout}>
      <label css={S.SInput(isEmpty)}>
        <input name={name} type={type} onChange={handleInputChange} />
        <span>{placeholder}</span>
      </label>
      <div css={S.SStateBox}></div>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  name: "",
};

export default Input;
