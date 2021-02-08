import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Row } from 'antd'
import CardList from './Sections/CardList'

function LandingPage(props) {

    const [testCard, setTestCard] = useState(["test"])


    return (
        <div style={{
            display: 'block', justifyContent: 'center', alignItems: 'center',
            width: '100%', height: '100vh'
        }}>
            <CardList 
            title = "내가 찜한 콘텐츠"
            />
            <CardList 
            title = "내가 시청중인 콘텐츠"
            />
        </div>
    )
}

export default LandingPage
