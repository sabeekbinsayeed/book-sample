import React from 'react';
import './Price.css'

const Price = (props) => {
    console.log(props)
    let totalprice = 0
    for (const book of props.carts) {
        totalprice = totalprice + book.price * book.quantity;
    }

    return (
        <div className='price-show'>


            <button className='button-price'>{totalprice} tk</button>
        </div>
    );
};

export default Price;