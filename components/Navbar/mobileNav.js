import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import Icon from "../../public/saffron.svg";
import Hamburger from "../../public/menu.svg";

function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Nav>
      <Logo>
        <Image src={Icon} alt="Saffron" />
      </Logo>
      <HamburgerDiv onClick={() => setIsOpen(!isOpen)}>
        <Image height={40} width={40} src={Hamburger} alt="Menu" />
      </HamburgerDiv>
      <Menu isOpen={isOpen}>
        <NavItem href="https://gov.saffron.finance/"  target="_blank" rel="noreferrer">Governance</NavItem>
        <NavItem href="https://vote.saffron.finance/#/"  target="_blank" rel="noreferrer">Vote</NavItem>
        <NavItem href="https://academy.saffron.finance/"  target="_blank" rel="noreferrer">Academy</NavItem>
        <NavItem href="https://docs.saffron.finance/"  target="_blank" rel="noreferrer">Docs</NavItem>
      </Menu>
    </Nav>
  );
}

export default MobileNav;

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  @media screen and (min-width: 851px) {
    display: none;
  }
`;

const Logo = styled.a`
  padding: 20px 0px 0px 15px;
`;

const HamburgerDiv = styled.a`
  cursor: pointer;
  padding: 20px 15px 0px 0px;
`;



const Menu = styled.div`
  display: flex;
  background: white;
  position: absolute;
  top: 65px;
  z-index: 1;
  overflow: hidden;
  flex-direction: column;
  width: 100%;
  margin-top: 15px;
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  max-height: ${( { isOpen }) => isOpen ? "300px" : "0px"};
  transition: max-height 0.3s ease-in;

`;

const NavItem = styled.a`
  color: #0f1621;
  font-weight: 400;
  padding: 20px 0px 20px 15px;
`;
