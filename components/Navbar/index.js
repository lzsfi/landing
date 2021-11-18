import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Axios from "axios";
import Image from "next/image";

import MobileMenu from "./mobilemenu";
import MenuIcon from "../../public/menu.svg";
import Icon from "../../public/saffron.svg";

function Navbar() {
  const [sfi, setSfi] = useState("");

  const getSfi = () => {
    Axios.get(
      "https://api.coingecko.com/api/v3/simple/price?ids=saffron-finance&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=true"
    ).then((response) => {
      console.log(response);
      setSfi("$" + response.data["saffron-finance"].usd);
    });
  };

  getSfi();

  return (
    <Container>
      <NavbarItems>
        <Items>
          <Image src={Icon} />
          <SaffronText>Saffron</SaffronText>
          <Navigation>
            <A href="https://gov.saffron.finance/" target="_blank">
              <NavItem>Governance</NavItem>
            </A>
            <A href="https://vote.saffron.finance/#/" target="_blank">
              <NavItem>Vote</NavItem>
            </A>
            <A
              href="https://docs.saffron.finance/saffron-finance/saffron-academy"
              target="_blank"
            >
              <NavItem>Academy</NavItem>
            </A>
            <A
              href="https://docs.saffron.finance/saffron-finance/whitepaper"
              target="_blank"
            >
              <NavItem>Whitepaper</NavItem>
            </A>
          </Navigation>
        </Items>
        <Items>
          <Div>
            <Image height={40} width={40} src={MenuIcon}></Image>
          </Div>
          <Price>{sfi}</Price>
          <A href="https://app.saffron.finance/" target="_blank">
            <Button>Launch App</Button>
          </A>
        </Items>
      </NavbarItems>
    </Container>
  );
}

export default Navbar;

// styles

const SaffronText = styled.div`
  margin-left: 10px;
  font-size: 22px;
  color: #0f1621;
  font-weight: 600;
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
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 1200px) {
    margin-left: 25px;
    margin-right: 25px;
  }
`;

const Items = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 50px;
`;

const Navigation = styled.div`
  margin-left: 56px;
  display: flex;
  @media screen and (max-width: 851px) {
    display: none;
  }
`;

const NavItem = styled.div`
  color: #0f1621;
  font-weight: 400;
  margin-right: 31px;
  &:hover {
    color: #c44536;
  }
`;

const Price = styled.div`
  color: #0f1621;
  font-weight: 500;
  margin-right: 15px;
  @media screen and (max-width: 851px) {
    display: none;
  }
`;

const A = styled.a``;

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
  @media screen and (max-width: 851px) {
    display: none;
  }
`;


const Div = styled.div`
  cursor: pointer;
  @media screen and (min-width: 851px) {
    display: none;
  }
`;