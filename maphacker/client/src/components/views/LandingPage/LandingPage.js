import React, { Component } from 'react'
import Carousel from './Sections/Carousel'
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
        image: '/images/img.jpg',
        title: 'Russian doll'
    },
    {
        id: 3,
        image: '/images/img.jpg',
        title: 'The rain',
    },
    {
        id: 4,
        image: '/images/img.jpg',
        title: 'Sex education'
    },
    {
        id: 5,
        image: '/images/img.jpg',
        title: 'Elite'
    },
    {
        id: 6,
        image: '/images/img.jpg',
        title: 'Black mirror'
    }
];


export class LandingPage extends Component {
    render() {
        return (
            <div className="LandingPage">
                <Slider title="title1">
                    {cards.map(card => (
                        <Slider.Item card={card} key={card.id}>item</Slider.Item>
                    ))}
                </Slider>
                <Slider title="title2">
                    {cards.map(card => (
                        <Slider.Item card={card} key={card.id}>item</Slider.Item>
                    ))}
                </Slider>
            </div>
        )
    }
}

export default LandingPage
