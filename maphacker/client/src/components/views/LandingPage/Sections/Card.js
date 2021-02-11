import React from 'react'
import { Col } from 'antd'
import styled from 'styled-components'

const IMG = styled.img`
  width: 25%;
  padding: 0 2px;
  box-sizing: border-box;
    z-index: 1;
    display: inline-block;
    position: relative;
    white-space: normal;
    vertical-align: top;
    padding: 0 2px;
`;

function Card({ img }) {
    return (
        <IMG src={img} />
    )
}

export default Card
