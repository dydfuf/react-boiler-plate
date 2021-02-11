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
            />
            <CardList 
            />
        </div>
    )
}

export default LandingPage
