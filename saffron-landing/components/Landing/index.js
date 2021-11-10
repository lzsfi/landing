import React from "react";
import styled, { css } from "styled-components";
import Image from 'next/image'

import SFI from "../../public/sfilanding.svg"

function Landing() {
  return (
    <InfoSec>
      <Container>
        <InfoRow>
          <InfoColumn>
            <TextWrapper>
              <Heading>A Customized <br/> Risk/Return Protocol</Heading>
              <Subtitle>
                Saffron Finance is a peer to peer risk exchange protocol. The
                protocol allows its users (i.e. liquidity providers) to
                customize their risk and return profiles via the use of SFI pool
                tranches.
              </Subtitle>
              <Button>Enter App</Button>{" "}
              <Button alternative>Documentation</Button>
            </TextWrapper>
          </InfoColumn>
          <InfoColumn>
            <ImgWrapper>
              <Image src={SFI}/>
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
  padding-top: 0;
  padding-bottom: 60px;
  justify-content: flex-end;
`;

const ImgWrapper = styled.div`
  max-width: 555px;
  display: flex;
  justify-content: flex-end;
  padding-right: 45px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`


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


