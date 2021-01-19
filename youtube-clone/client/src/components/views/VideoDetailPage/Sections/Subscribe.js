import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Subscribe(props) {

    const userTo = props.userTo
    const userFrom = props.userFrom

    const [SubscribeNumber, setSubscribeNumber] = useState(0)
    const [Subscribed, setSubscribed] = useState(false)

    useEffect(() => {

        const subscribedVariable = { userTo: userTo, userFrom: userFrom }

        axios.post('/api/subscribe/subscribeNumber', subscribedVariable)
            .then(response => {
                if (response.data.success) {
                    setSubscribeNumber(response.data.subscribeNumber)
                } else {
                    alert('구독자 수를 받아올 수 없습니다.')
                }
            })

        axios.post('/api/subscribe/subscribed', subscribedVariable)
            .then(response => {
                if (response.data.success) {
                    setSubscribed(response.data.subscribed)
                } else {
                    alert('정보를 받아오지 못했습니다. ')
                }
            })

    }, [])

    const onSubscribe = () => {

        let subscribeVariable = {
            userTo: userTo,
            userFrom: userFrom
        }

        if (Subscribed) { // 구독중이라면

            axios.post('/api/subscribe/unSubscribe', subscribeVariable)
                .then(response => {
                    if (response.data.success) {
                        setSubscribeNumber(SubscribeNumber - 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('구독 취소하는데 실패 했습니다.')
                    }
                })

        } else { // 구독중이 아니라면

            axios.post('/api/subscribe/doSubscribe', subscribeVariable)
                .then(response => {
                    if (response.data.success) {
                        setSubscribeNumber(SubscribeNumber + 1)
                        setSubscribed(!Subscribed)
                    } else {
                        alert('구독하는데 실패 했습니다.')
                    }
                })

        }

    }

    return (
        <div>
            <button
                style={{
                    background: `${Subscribed ? '#AAAAAA' : '#CC0000'}`,
                    borderRadius: '4px',
                    color: 'white', padding: '10px 16px',
                    fontWeight: '500', fontSize: '1rem', textTransform: 'uppercase'
                }}
                onClick={onSubscribe}
            >

                {SubscribeNumber} {Subscribed ? '구독중' : '구독'}

            </button>
        </div>
    )
}

export default Subscribe
