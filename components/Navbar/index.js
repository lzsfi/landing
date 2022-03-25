import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Axios from "axios";
import Image from "next/image";

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
          <Image src={Icon} alt="Saffron" />
          <SaffronText>Saffron</SaffronText>
          <Navigation>
            <NavItem href="https://gov.saffron.finance/" target="_blank" rel="noreferrer">
              Governance
            </NavItem>
            <NavItem href="https://vote.saffron.finance/#/" target="_blank" rel="noreferrer">
              Vote
            </NavItem>
            <NavItem
              href="https://docs.saffron.finance/saffron-finance/saffron-academy"
              target="_blank" rel="noreferrer"
            >
              Academy
            </NavItem>
            <NavItem
              href="https://docs.saffron.finance/"
              target="_blank" rel="noreferrer"
            >
              Docs
            </NavItem>
          </Navigation>
        </Items>
        <Items>
          <Price>{sfi}</Price>
          <a href="https://app.saffron.finance/" target="_blank" rel="noreferrer">
            <Button>Launch App</Button>
          </a>
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
  @media screen and (max-width: 851px) {
    display: none;
  }
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
`;

const NavItem = styled.a`
  color: #0f1621;
  font-weight: 400;
  margin-right: 31px;
  transition: all 0.2s ease-in;
  &:hover {
    color: #c44536;
  }
`;

const Price = styled.div`
  color: #0f1621;
  font-weight: 500;
  margin-right: 15px;
`;

const Button = styled.button`
  background-color: #c44536;
  width: 133px;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  font-family: 'Work Sans', sans-serif;
  font-weight: 500;
  transition: 0.2s;
  &:hover {
    opacity: 0.8;
  }
`;
