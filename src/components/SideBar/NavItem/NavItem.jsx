import React from "react";
/** @jsxImportSource @emotion/react */
import { SLayout } from "./style";

function NavItem({ onclick, children }) {

  return <div css={SLayout}>{children}</div>;
}

export default NavItem;
