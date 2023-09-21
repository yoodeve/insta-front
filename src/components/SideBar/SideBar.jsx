import React, { useEffect, useState } from "react";
/** @jsxImportSource @emotion/react */
import * as S from "./style";
import { GoHome, GoHomeFill } from "react-icons/go";
import { FiSearch, FiInstagram } from "react-icons/fi";
import { AiOutlinePlusSquare, AiFillPlusSquare } from "react-icons/ai";
import NavItem from "./NavItem/NavItem";
import { useNavigate } from "react-router-dom";

function Sidebar(props) {
  const navigate = useNavigate();
  const [isSelectedList, setIsSelectedList] = useState([
    true,
    false,
    false,
    false,
  ]);
  useEffect(() => {
    console.log(isSelectedList)
  }, [isSelectedList])

  const handleHomeClick = () => {
    setIsSelectedList([true, false, false, false]);
  };
  const handleSearchClick = () => {
    setIsSelectedList([false, true, false, false]);
  };
  const handleAddContentClick = () => {
    setIsSelectedList([false, false, true, false]);
  };
  const handleProfileClick = () => {
    setIsSelectedList([false, false, false, true]);
  };

  return (
    <div css={S.SLayout}>
      <NavItem onclick={handleHomeClick}>
        <FiInstagram />
      </NavItem>
      <NavItem onclick={handleHomeClick}>
        {isSelectedList[0] ? <GoHomeFill /> : <GoHome />}
      </NavItem>
      <NavItem onclick={handleSearchClick}>
        <FiSearch />
      </NavItem>
      <NavItem onclick={handleAddContentClick}>
        {isSelectedList[2] ? <AiFillPlusSquare /> : <AiOutlinePlusSquare />}
      </NavItem>
      <NavItem onclick={handleProfileClick}>
        <FiInstagram />
      </NavItem>
    </div>
  );
}

export default Sidebar;
