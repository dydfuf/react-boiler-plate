import React from 'react'
import { Col } from 'antd'
import Card from './Card'
import { Row } from 'antd'

function CardList(props) {
    return (

        <div>
            <h2> {props.title} </h2>
            <Row gutter={[16, 16]}>
                <Card
                    image="https://media.vlpt.us/images/chy0428/post/78e91082-da19-428b-984a-c3e21d0103e0/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png"
                    cardName="test"
                />
                <Card
                    image="https://media.vlpt.us/images/chy0428/post/78e91082-da19-428b-984a-c3e21d0103e0/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png"
                    cardName="test"
                />
                <Card
                    image="https://media.vlpt.us/images/chy0428/post/78e91082-da19-428b-984a-c3e21d0103e0/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png"
                    cardName="test"
                />
                <Card
                    image="https://media.vlpt.us/images/chy0428/post/78e91082-da19-428b-984a-c3e21d0103e0/%E1%84%8A%E1%85%A5%E1%86%B7%E1%84%82%E1%85%A6%E1%84%8B%E1%85%B5%E1%86%AF.png"
                    cardName="test"
                />
            </Row>
        </div>
    )
}

export default CardList
