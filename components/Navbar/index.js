import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import Icon from "../../public/saffron.svg";

function Navbar() {
  return (
    <Container>
      <NavbarItems>
        <Items>
          <Image src={Icon} />
          <SaffronText>saffron</SaffronText>
          <Navigation>
            <NavItem>Governance</NavItem>
            <NavItem>Vote</NavItem>
            <NavItem>Academy</NavItem>
            <NavItem>Whitepaper</NavItem>
          </Navigation>
        </Items>
        <Items>
          <NavItem>
            $621.04 <Span>3.41%</Span>
          </NavItem>
          <Button>Launch App</Button>
        </Items>
      </NavbarItems>
    </Container>
  );
}

export default Navbar;

// styles

const SaffronText = styled.div`
  cursor: default;
  user-select: none;
  margin-left: 10px;
  font-size: 22px;
  color: #0f1621;
  font-weight: normal;
`;

const Container = styled.div`
  margin-top: 30px;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  left: 0;
  right: 0;
  text-align: center;
`;

const NavbarItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Items = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 50px;
`;

const Navigation = styled.div`
  margin-left: 56px;
  display: flex;
`;

const NavItem = styled.div`
  color: #0f1621;
  cursor: pointer;
  font-weight: 500;
  margin-right: 31px;
`;

const Span = styled.span`
  background-color: #16c784;
  border-radius: 5px;
  font-size: 15px;
  color: white;
  padding: 5px 5px 5px 5px;
`;

const Button = styled.button`
  background-color: #0f1621;
  width: 133px;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 15px;
  letter-spacing: 1px;
  font-weight: 500;
  &:hover {
    opacity: 0.8;
  }
`;
