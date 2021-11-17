import React, { useState, useEffect } from "react";
import Axios from "axios";
import styled, { css } from "styled-components";
import Image from "next/image";

import SFI from "../../public/sfilanding.svg";

function Landing() {
  const [tvl, setTVL] = useState();
  const [apr, setAPR] = useState();

  const getData = () => {
    Axios.get("https://mainnet-api.saffron.finance/v2/pools").then(
      (response) => {
        setTVL(
            response.data.stakingPools[0].tvlUsd +
            response.data.stakingPools[1].tvlUsd +
            response.data.stakingPools[2].tvlUsd +
            response.data.stakingPools[3].tvlUsd +
            response.data.stakingPools[4].tvlUsd +
            response.data.stakingPools[5].tvlUsd
        );
        setAPR(
            parseInt(response.data.stakingPools[1].apr)
        );
      }
      
    );
  };

  getData();

  return (
    <InfoSec>
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>
                A Customized <br /> Risk/Return Protocol
              </Heading>
              <Subtitle>
                Saffron Finance is a peer to peer risk exchange protocol. The
                protocol allows its users (i.e. liquidity providers) to
                customize their risk and return profiles via the use of SFI pool
                tranches.
              </Subtitle>
              <A href="https://app.saffron.finance/" target="_blank">
                <Button>Launch App</Button>{" "}
              </A>
              <A href="https://docs.saffron.finance/" target="_blank">
                <Button alternative>Documentation</Button>
              </A>
            </TextWrapper>
            <StatWrapper>
              <Subtitle mr>
                TVL <Stat>${tvl}</Stat>
                {/* .toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") */}
              </Subtitle>
              <Subtitle mr>
                SFI/ETH APR <Stat>{apr}%</Stat>
              </Subtitle>
              <Subtitle>
                Total Staked <Stat>$120,232,32.21</Stat>
              </Subtitle>
            </StatWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper>
              <Image src={SFI} />
            </ImgWrapper>
          </InfoColumn>
        </InfoRow>
      </Container>
    </InfoSec>
  );
}

export default Landing;

const Container = styled.div`
  z-index: 1;
  width: 100%;
  max-width: 1200px;
  margin-right: auto;
  margin-left: auto;
`;

const InfoSec = styled.div`
  padding: 160px 0;
`;

const InfoRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  flex-direction: ${({ imgStart }) => (imgStart ? "row-reverse" : "row")};
`;

const InfoColumn = styled.div`
  flex: 1;
  @media screen and (max-width: 1200px) {
    max-width: 100%;
    flex-basis: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
  }
`;

const TextWrapper = styled.div`
  width: 650px;
`;

const A = styled.a``;

const StatWrapper = styled.div`
  display: flex;
  padding-top: 58px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;

const Heading = styled.h1`
  width: 540px;
  margin-bottom: 42px;
  font-size: 48px;
  line-height: 1.2;
  font-weight: 600;
  color: #0f1621;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
`;

const Subtitle = styled.p`
  margin-bottom: 38px;
  font-size: 16px;
  line-height: 24px;
  color: #0f1621;
  ${(props) =>
    props.mr &&
    css`
      padding-right: 130px;
    `}
`;

const Stat = styled.span`
  line-height: 35px;
  font-size: 18px;
  font-weight: 500;
  color: #c44536;
`;

const Button = styled.button`
  background-color: #c44536;
  width: 151px;
  height: 45px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: #ffffff;
  font-size: 16px;
  letter-spacing: 1px;
  font-weight: 500 !important;
  &:hover {
    opacity: 0.8;
  }
  ${(props) =>
    props.alternative &&
    css`
      background-color: #0f1621;
      margin-left: 25px;
    `}
`;
