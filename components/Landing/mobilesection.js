import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";

function MobileSection(props) {
    
  return (
    <>
      <MobileStatWrapper mt>
        <StyledText>TVL</StyledText>
        <StyledText>
          <Span>${props.tvl}</Span>
        </StyledText>
      </MobileStatWrapper>
      <MobileStatWrapper>
        <StyledText>SFI/ETH APR</StyledText>
        <StyledText>
          <Span>{props.apr}%</Span>
        </StyledText>
      </MobileStatWrapper>
      <MobileStatWrapper>
        <StyledText>SFI APR</StyledText>
        <StyledText>
          <Span>{props.sfiapr}%</Span>
        </StyledText>
      </MobileStatWrapper>
    </>
  );
}

export default MobileSection;

// styles


const MobileStatWrapper = styled.div`
  height: 60px;
  background-color: white;
  border-radius: 10px;
  flex-basis: 100%;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  margin-top: 20px;
  ${(props) =>
    props.mt &&
    css`
      margin-top: 70px;
    `}
  @media screen and (min-width: 1200px) {
    display: none;
  }
`;

const StyledText = styled.p`
  font-size: 18px;
  margin-left: 20px;
  margin-right: 20px;
  font-weight: 500;
`;

const Span = styled.span`
  color: #c44536;
`;
