import React from "react";
import * as S from "./style";
import { Outlet } from "react-router-dom";
import SideBar from "../../SideBar/SideBar";
/** @jsxImportSource @emotion/react */

function RootLayout(props) {
  return (
    <div css={S.SLayout}>
      <SideBar />
      <Outlet />
    </div>
  );
}

export default RootLayout;
