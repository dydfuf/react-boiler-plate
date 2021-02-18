import React from 'react';
import SliderContext from './context'
import './Item.scss'

const Item = ({ card }) => (
    <SliderContext.Consumer>
        {({ elementRef }) => {
            let isHovering = false;
            return (
                <div
                    ref={elementRef}
                    className={'item'}
                    onMouseOver={() => {
                        isHovering = null;
                        console.log(isHovering)
                    }}
                    onMouseOut={() => {
                        isHovering = false;
                        console.log(isHovering)
                    }}
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