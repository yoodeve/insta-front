import React, { useEffect, useRef, useState } from "react";
import * as S from "./style";
import {
  NAME,
  PASSWORD,
  PHONE_OR_EMAIL,
  USERNAME,
} from "../../../../constants/regex";
/** @jsxImportSource @emotion/react */
import { BsCheckCircle } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";

function Input({ placeholder, name, type, changeAccount }) {
  const [isEmpty, setIsEmpty] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [inputStatus, setInputStatus] = useState(<></>);

  const handleInputChange = (e) => {
    setInputVal(e.target.value);
    changeAccount(e.target.name, e.target.value);
  };

  const handleInputOnBlur = (e) => {
    const value = e.target.value;
    let regex = null;
    switch (e.target.name) {
      case "phoneOrEmail":
        regex = PHONE_OR_EMAIL;
        break;
      case "name":
        regex = NAME;
        break;
      case "username":
        regex = USERNAME;
        break;
      case "password":
        regex = PASSWORD;
        break;
      default:
        regex = null;
        console.log();
        break;
    }
    if (!!regex && !regex.test(value)) {
      setInputStatus(<ImCancelCircle color="red" />);
    } else if (!!regex && regex?.test(value)) {
      setInputStatus(<BsCheckCircle color="green" />);
    } else {
      setInputStatus("");
    }
    // setInputStatus(<BsCheckCircle color="green" />);
  };

  const handleInputOnFocus = () => {
    setInputStatus("");
  };

  useEffect(() => {
    setIsEmpty(!inputVal);
  }, [inputVal]);

  return (
    <div css={S.SLayout}>
      <label css={S.SInput(isEmpty)}>
        <input
          name={name}
          type={type}
          onChange={handleInputChange}
          onBlur={handleInputOnBlur}
          onFocus={handleInputOnFocus}
        />
        <span>{placeholder}</span>
      </label>
      <div css={S.SStateBox}>{inputStatus}</div>
    </div>
  );
}

Input.defaultProps = {
  type: "text",
  placeholder: "",
  name: "",
};

export default Input;
