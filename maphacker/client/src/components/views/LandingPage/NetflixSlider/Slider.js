import React, { useState } from 'react';
import cx from 'classnames';
import SliderContext from './context'
import Content from './Content'
import SlideButton from './SlideButton'
import SliderWrapper from './SliderWrapper'
import useSliding from './useSliding'
import useSizeElement from './useSizeElement'
import './Slider.scss'

const Slider = ({ children, activeSlide, title }) => {
    const [currentSlide, setCurrentSlide] = useState(activeSlide);
    const { width, elementRef } = useSizeElement();
    const {
        handlePrev,
        handleNext,
        slideProps,
        containerRef,
        hasNext,
        hasPrev
    } = useSliding(width, React.Children.count(children));

    const handleSelect = card => {
        setCurrentSlide(card);
    };

    const handleClose = () => {
        setCurrentSlide(null);
    };

    const contextValue = {
        onSelectSlide: handleSelect,
        onCloseSlide: handleClose,
        elementRef,
        currentSlide,
    };
    return (
        <div style={{ margin: '3vw 0' }}>
            <SliderContext.Provider value={contextValue}>
                <div
                    style={{ display: 'flex', verticalAlign: 'bottom', lineHeight: '1.25vw', fontSize: '1.4vw', fontWeight: '700', margin: '0 4% .5em 4%'}}
                >
                    {title}
                </div>
                <SliderWrapper>
                    <div
                        className={cx('slider', { 'slider--open': currentSlide != null })}
                    >
                        <div ref={containerRef} className="slider__container" {...slideProps}>{children}</div>
                    </div>
                    {hasPrev && <SlideButton onClick={handlePrev} type="prev" />}
                    {hasNext && <SlideButton onClick={handleNext} type="next" />}
                </SliderWrapper>
                {currentSlide && <Content card={currentSlide} onClose={handleClose} />}
            </SliderContext.Provider>
        </div>

    );
};

export default Slider;