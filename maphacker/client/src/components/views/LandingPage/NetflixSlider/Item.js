import React from 'react';
import SliderContext from './context'
import './Item.scss'

const Item = ({ card }) => (
    <SliderContext.Consumer>
        {({ elementRef }) => {
            return (
                <div
                    ref={elementRef}
                    className={'item'}
                >
                    <a href={`/mapinfo/${card.id}`}>
                        <img src={card.image} alt="" />
                    </a>
                </div>
            );
        }}
    </SliderContext.Consumer>
);

export default Item;