import React, { useEffect, useState, useRef } from 'react'
import Card from './Card'
import img1 from './img.jpg'
import styled from 'styled-components'
import { Row } from 'antd'

function CardList(props) {
    const Container = styled.div`
  width: 100%;
  overflow-x: hidden; // 선을 넘어간 이미지들은 보이지 않도록 처리합니다.
`;

    const Button = styled.button`
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 20;
    width: 4%;
    text-align: center;
    display: flex;
    color: #fff;
    justify-content: center;
  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
  }
`;

    const SliderContainer = styled.div`
  width: 100%;
  display: flex; //이미지들을 가로로 나열합니다.
`;


    const TOTAL_SLIDES = 2;
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRef = useRef(null);
    const nextSlide = () => {
        if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
            setCurrentSlide(0);
        } else {
            setCurrentSlide(currentSlide + 1);
        }
    };
    const prevSlide = () => {
        if (currentSlide === 0) {
            setCurrentSlide(TOTAL_SLIDES);
        } else {
            setCurrentSlide(currentSlide - 1);
        }
    };
    useEffect(() => {
        slideRef.current.style.transition = "all 0.5s ease-in-out";
        slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    }, [currentSlide]);
    return (
        <div style={{ margin: '3vw 0'}}>
            {currentSlide}
            <div style={{ display: 'flex', position: 'relative', margin: '0', padding: '0 4%', touchAction: 'pan-y' }}>
                <div>
                    <Button onClick={prevSlide}>◀️</Button>
                </div>
                <Container>
                    <SliderContainer ref={slideRef}>
                        <Card img={img1} />
                        <Card img={img1} />
                        <Card img={img1} />
                    </SliderContainer>
                </Container>
                <div>
                    <Button onClick={nextSlide}>▶️</Button>
                </div>
            </div>
        </div>


    )
}

export default CardList
