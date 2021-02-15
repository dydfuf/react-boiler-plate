import React, { useEffect, useState, useRef } from 'react'
import Card from './Card'
import img1 from './img.jpg'
import styled from 'styled-components'
import { Row } from 'antd'

function CardList(props) {
    const Container = styled.div`
position: relative;
margin: 0;
padding: 0 4%;
touch-action: pan-y
z-index: 2;
display: block;
`;

    const SliderContainer = styled.div`
overflow-x: visible;
padding-bottom: 1px;
display: block;
white-space: nowrap;
`;
    const Content = styled.div`
width: 20%;
box-sizing: border-box;
z-index: 1;
display: inline-block;
position: relative;
white-space: normal;
vertical-align: top;
padding: 0 2px;
    `;

    const ButtonNext = styled.button`
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
right: 0;
cursor: pointer;
position absolute;
top 0;
bottom: 0;
z-index: 20;
width: 4%;
text-align: center;
-webkit-box-pack: center;
justify-content: center;
display: flex;
color: #fff;
&:hover {
  transition: all 0.3s ease-in-out;
  background-color: coral;
  color: #fff;
}
`;

    const ButtonPrev = styled.button`
border-top-left-radius: 4px;
border-bottom-left-radius: 4px;
left: -2px;
cursor: pointer;
position absolute;
top 0;
bottom: 0;
z-index: 20;
width: 4%;
text-align: center;
-webkit-box-pack: center;
justify-content: center;
display: flex;
color: #fff;
&:hover {
  transition: all 0.3s ease-in-out;
  background-color: coral;
  color: #fff;
}
`;

    // const TOTAL_SLIDES = 10;
    // const [currentSlide, setCurrentSlide] = useState(0);
    // const slideRef = useRef(null);
    // const nextSlide = () => {
    //     if (currentSlide >= TOTAL_SLIDES) { // 더 이상 넘어갈 슬라이드가 없으면 슬라이드를 초기화합니다.
    //         setCurrentSlide(0);
    //     } else {
    //         setCurrentSlide(currentSlide + 1);
    //     }
    // };
    // const prevSlide = () => {
    //     if (currentSlide === 0) {
    //         setCurrentSlide(TOTAL_SLIDES);
    //     } else {
    //         setCurrentSlide(currentSlide - 1);
    //     }
    // };
    // useEffect(() => {
    //     slideRef.current.style.transition = "all 0.5s ease-in-out";
    //     slideRef.current.style.transform = `translateX(-${currentSlide}00%)`; // 백틱을 사용하여 슬라이드로 이동하는 애니메이션을 만듭니다.
    // }, [currentSlide]);
    return (
        <div style={{ margin: '3vw 0', padding: '0', MozBoxSizing: 'border-box', position: 'relative', outline: '0'}}>
            <Container>
                <ButtonPrev > P </ButtonPrev>
                <SliderContainer>
                    <Content>
                        <Card img={img1} />
                        <Card img={img1} />
                        <Card img={img1} />
                    </Content>
                </SliderContainer>
                <ButtonNext > N </ButtonNext>
            </Container>
        </div>



    )
}

export default CardList
