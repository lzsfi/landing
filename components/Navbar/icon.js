import React from "react"
import styled from "styled-components"

import image from "../../public/saffy.png"

const Icon = () => <Image src={image} />

export default Icon

const Image = styled.img`
	display: flex;
	height: 30px;
	width: 30px;
`