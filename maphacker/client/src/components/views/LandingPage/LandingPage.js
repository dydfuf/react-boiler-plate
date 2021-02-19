import React, { Component } from 'react'
import Slider from './NetflixSlider'
import './LandingPage.scss'

const cards = [
    {
        id: 1,
        image: '/images/img.jpg', // public 에 위치함
        title: '1983'
    },
    {
        id: 2,
        image: '/images/img2.jpg',
        title: 'Russian doll'
    },
    {
        id: 3,
        image: '/images/img3.jpeg',
        title: 'The rain',
    },
    {
        id: 4,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 5,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 6,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 7,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 8,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    },
    {
        id: 4,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 5,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 6,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 7,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 8,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    },
    {
        id: 4,
        image: '/images/img4.jpg',
        title: 'Sex education'
    },
    {
        id: 5,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 6,
        image: '/images/img2.jpg',
        title: 'Black mirror'
    },
    {
        id: 7,
        image: '/images/img3.jpeg',
        title: 'Black mirror'
    },
    {
        id: 8,
        image: '/images/img4.jpg',
        title: 'Black mirror'
    }
];


export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Slider title="Stared">
                    {cards.map(card => (
                        <Slider.Item card={card} key={card.id}>item</Slider.Item>
                    ))}
                </Slider>
                <Slider title="Category">
                    {cards.map(card => (
                        <Slider.Item card={card} key={card.id}>item</Slider.Item>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default LandingPage
