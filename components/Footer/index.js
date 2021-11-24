import React from "react";
import styled, { css } from "styled-components";
import Image from "next/image";

import Discord from "../../public/discord.svg";
import Twitter from "../../public/twitter.svg";
import Telegram from "../../public/telegram.svg";
import Github from "../../public/github.svg";
import Medium from "../../public/medium.svg";
import Youtube from "../../public/youtube.svg"

function Footer() {
  return (
    <Container>
      <A href="https://discord.com/invite/pDXpXKY" target="_blank" alt="Discord">
        <Icon>
          <Image src={Discord} />
        </Icon>
      </A>
      <A href="https://twitter.com/saffronfinance_" target="_blank" alt="Twitter">
        <Icon>
          <Image src={Twitter} />
        </Icon>
      </A>
      <A href="https://t.me/saffronfinance" target="_blank" alt="Telegram">
        <Icon>
          <Image src={Telegram} />
        </Icon>
      </A>
      <A href="https://github.com/saffron-finance/saffron" target="_blank" alt="Github">
        <Icon>
          <Image src={Github} />
        </Icon>
      </A>
      <A href="https://medium.com/saffron-finance" target="_blank" alt="Medium">
        <Icon>
          <Image src={Medium} />
        </Icon>
      </A>
      <A href="https://www.youtube.com/channel/UCk_ZDXcc9Z56p9HWp7tFArA" target="_blank" alt="Youtube">
        <Icon>
          <Image src={Youtube} />
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
  background-color: #0f1621;
  width: 100%;
  position: absolute;
  margin-right: auto;
  margin-left: auto;
  left: 0;
  bottom: 0;
  right: 0;
  @media screen and (max-height: 975px) {
    position: sticky;
  }
`;

const Icon = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  &:hover {
    opacity: 0.8;
  }
`;

const A = styled.a``;
