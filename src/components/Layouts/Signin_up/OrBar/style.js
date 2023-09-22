import { css } from "@emotion/react";

export const SOrBar = css`
display: flex;
align-items: center;
justify-content: center;
margin: 10px 40px 18px;
span {
  width: max-content;
  flex-grow: 1;
  text-align: center;
  margin: 0 18px;
  font-weight: 400;
  color: #444;
  font-size: 14px;
}
&::before, &::after {
  content: '';
  width: 105px;
  height: 1px;
  background-color: #dbdbdb;
  flex-grow: 1;
}
`;