import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import Axios from "axios";
import Image from "next/image";

import Icon from "../../public/menu.svg";

function MobileMenu() {
  return (
    <Div>
      <Image height={40} width={40} src={Icon}></Image>
    </Div>
  );
}

export default MobileMenu;

const Div = styled.div`
  @media screen and (min-width: 851px) {
    display: none;
  }
`;
