import React from 'react';
import cx from 'classnames';
import SliderContext from './context'
import ShowDetailsButton from './ShowDetailsButton'
import Mark from './Mark'
import './Item.scss'

const Item = ({ card }) => (
    <SliderContext.Consumer>
        {({ onSelectSlide, currentSlide, elementRef }) => {
            const isActive = currentSlide && currentSlide.id === card.id;

            return (
                <div
                    ref={elementRef}
                    className={cx('item', {
                        'item--open': isActive,
                    })}
                >
                    <a href={`/mapinfo/${card.id}`}>
                        <img src={card.image} alt="" />
                    </a>
                    <ShowDetailsButton onClick={() => onSelectSlide(card)} />
                    {isActive && <Mark />}
                </div>
            );
        }}
    </SliderContext.Consumer>
);

export default Item;