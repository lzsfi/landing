import React from "react";
import styled, { css } from "styled-components";
import Image from 'next/image'

import Discord from "../../public/discord.svg"


function Footer() {
  return (
    <Container>
        <Row>
        <Image src={Discord} />
        <Image src={Discord} />
        <Image src={Discord} />
        <Image src={Discord} />
        <Image src={Discord} />
        </Row>
    </Container>
  );
}

export default Footer;

// styles

const Container = styled.div`
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

const Row = styled.div`
display: flex;
align-items: center;
justify-content: center;
`