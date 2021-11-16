import React from "react";
import styled, { css } from "styled-components";
import Image from 'next/image'

import Discord from "../../public/discord.svg"
import Twitter from "../../public/twitter.svg"
import Telegram from "../../public/telegram.svg"
import Github from "../../public/github.svg"
import Medium from "../../public/medium.svg"


function Footer() {
  return (
    <Container>
      <A href="https://discord.com/invite/pDXpXKY" target="_blank">
        <Icon>
          <Image src={Discord} />
        </Icon>
      </A>
      <A href="https://twitter.com/saffronfinance_" target="_blank">
        <Icon>
          <Image src={Twitter} />
        </Icon>
      </A>
      <A href="https://t.me/saffronfinance" target="_blank">
        <Icon>
          <Image src={Telegram} />
        </Icon>
      </A>
      <A href="https://github.com/saffron-finance/saffron" target="_blank">
        <Icon>
          <Image src={Github} />
        </Icon>
      </A>
      <A href="https://medium.com/saffron-finance" target="_blank">
        <Icon>
          <Image src={Medium} />
        </Icon>
      </A>
    </Container>
  );
}

export default Footer;

// styles

const Container = styled.div`
display: flex;
  justify-content: center;
  align-items: center;
height: 85px;
background-color: #0F1621;
width: 100%;
position:absolute;
margin-right: auto;
margin-left: auto;
left:0;
bottom:0;
right:0;
`;

const Icon = styled.div`
padding-right: 15px;
padding-left: 15px;
&:hover {
  opacity: 0.8;
}
`

const A = styled.a``