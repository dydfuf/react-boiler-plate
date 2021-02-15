import React from 'react'
import { Col } from 'antd'
import styled from 'styled-components'

const IMG = styled.img`
  width: 100%;
`;

function Card({ img }) {
    return (
        <IMG src={img} />
    )
}

export default Card
