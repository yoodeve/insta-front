import { css } from "@emotion/react";

export const SLayout = css`
  transition: all 0.2s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 4px 0px;
  padding: 12px;
  width: 48px;
  height: 48px;
  border-radius: 10px;
  font-size: 28px;
  cursor: pointer;
  &:active {
    background-color: #eee;
    font-size: 22px;
    color: #555;
  }
`;
