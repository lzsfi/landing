import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";


function MobileMenu() {
  return (
  <Menu>
    hi
  </Menu>
  )
}

export default MobileMenu

const Menu = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
position: absolute;
overflow: hidden;
flex-direction: column;
width: 100%;
background-color: white;
max-height: ${({isOpen}) => {isOpen ? "300px" : "0"}}
`