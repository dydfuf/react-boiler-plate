import React from 'react'
import { Col } from 'antd'
import styled from 'styled-components'

const IMG = styled.img`
  width: 50%;
  height: 35vh;
`;

function Card({ img }) {
    return (
        <IMG src={img} />
    )
}

export default Card
