import { css } from "@emotion/react";

export const SLayout = css`
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 3px;
  margin: 0px 40px 6px;
  width: 268px;
  height: 38px;
  background-color: #fafafa;
`;

export const SInput = (isEmpty) => css`
  position: relative;
  flex-grow: 1;
  padding: ${isEmpty? '9px 0px 7px 8px' : '14px 0px 2px 6px'};
  transition: all 0.05s ease;
  input {
    border: none;
    outline: none;
    background-color: transparent;
    height: 20px;
  }
  span {
    transform: translateY(-50%);
    position: absolute;
    left: 5px;
    top: ${isEmpty ? '50%': '25%'};
    color: #555;
    font-size: ${isEmpty ? '12px' : '10px'};
    transition: all 0.1s ease;
  }
`;

export const SStateBox = css`
  padding: 0 8px;
  background-color: #fafafa;
`;
